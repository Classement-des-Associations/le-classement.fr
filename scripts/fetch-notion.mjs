import consola from 'consola'
import { resolve } from 'pathe'
import { useEnv } from './utils/env.mjs'
import { useExtractContent } from './utils/extract.mjs'
import { clearDir, writeFile } from './utils/fs.mjs'
import { createNotionClient } from './utils/notion.mjs'
import { queryDatabase } from './utils/query.mjs'
import { useSlugify } from './utils/slugify.mjs'

async function main () {
  consola.start('Script', 'Fetch Notion')

  consola.info('Cleaning directories')

  const paths = [
    resolve('content/participations/2022'),
    resolve('content/categories'),
    resolve('content/ecoles'),
    resolve('content/associations')
  ]
  await Promise.all([
    paths.map(path => clearDir(path))
  ])

  const { participationsDatabaseId, schoolsDatabaseId, associationsDatabaseId, notionKey } = useEnv()
  const client = createNotionClient(notionKey)

  // Fetch associations
  const startTimeFetchAssociations = Date.now()
  const associations = await fetchAssociationsDatabase(client, associationsDatabaseId)
  consola.info(`Associations fetched in ${Date.now() - startTimeFetchAssociations}ms`)

  // Fetch schools
  const startTimeFetchSchools = Date.now()
  const schools = await fetchSchoolsDatabase(client, schoolsDatabaseId)
  consola.info(`Schools fetched in ${Date.now() - startTimeFetchSchools}ms`)

  // Fetch participations
  const startTimeFetchParticipations = Date.now()
  const participations = await fetchParticipationsDatabase(client, participationsDatabaseId)
  consola.info(`Participations fetched in ${Date.now() - startTimeFetchParticipations}ms`)

  // Extract participations
  for (const { properties } of participations) {
    const name = useExtractContent(properties.Nom)
    const associationsId = useExtractContent(properties.Associations)

    const relatedAssociations = []
    for (const pageId of associationsId) {
      const association = associations.find(({ id }) => id === pageId)

      if (!association) {
        continue
      }

      const associationName = useExtractContent(association.properties.Nom)
      const associationCategory = useExtractContent(association.properties['Catégorie'])
      const schoolsPagesId = useExtractContent(association.properties.Ecoles)

      const relatedSchools = []
      for (const pageId of schoolsPagesId) {
        const school = schools.find(({ id }) => id === pageId)

        if (!school) {
          continue
        }

        const schoolName = useExtractContent(school.properties.Nom)
        relatedSchools.push({
          id: useSlugify(schoolName),
          name: schoolName
        })
      }

      relatedAssociations.push({
        id: useSlugify(associationName),
        name: associationName,
        category: {
          id: useSlugify(associationCategory.name),
          ...associationCategory
        },
        schools: relatedSchools
      })
    }

    await writeFile(name, 'participations/2022', {
      id: useSlugify(name),
      name,
      associations: relatedAssociations
    })
  }

  // Extract categories
  const categories = new Map()
  for (const { properties } of associations) {
    const category = useExtractContent(properties['Catégorie'])
    const name = useExtractContent(properties.Nom)
    const schoolsPagesId = useExtractContent(properties.Ecoles)

    const categoryName = category.name
    if (!categories.has(categoryName)) {
      categories.set(categoryName, { color: category.color, associations: [] })
    }
    const categoryAssociations = categories.get(categoryName)

    const relatedSchools = []
    for (const pageId of schoolsPagesId) {
      const school = schools.find(({ id }) => id === pageId)

      if (!school) {
        continue
      }

      const schoolName = useExtractContent(school.properties.Nom)
      relatedSchools.push({
        id: useSlugify(schoolName),
        name: schoolName
      })
    }

    categoryAssociations.associations.push({
      id: useSlugify(name),
      name,
      schools: relatedSchools
    })
    categories.set(categoryName, categoryAssociations)
  }

  for (const [category, data] of categories) {
    await writeFile(category, 'categories', {
      id: useSlugify(category),
      name: category,
      color: data.color,
      associations: data.associations
    })
  }

  // Extract schools
  for (const { properties } of schools) {
    const name = useExtractContent(properties.Nom)
    const associationsId = useExtractContent(properties.Associations)
    const relatedAssociations = []
    for (const pageId of associationsId) {
      const association = associations.find(({ id }) => id === pageId)
      if (!association) {
        continue
      }

      const associationName = useExtractContent(association.properties.Nom)
      const associationCategory = useExtractContent(association.properties['Catégorie'])

      relatedAssociations.push({
        id: useSlugify(associationName),
        name: associationName,
        category: {
          id: useSlugify(associationCategory.name),
          ...associationCategory
        }
      })
    }

    await writeFile(name, 'ecoles', {
      id: useSlugify(name),
      name,
      associations: relatedAssociations
    })
  }

  // Extract associations
  for (const { properties } of associations) {
    const name = useExtractContent(properties.Nom)
    const description = useExtractContent(properties.Description)
    const category = useExtractContent(properties['Catégorie'])
    const linkedin = useExtractContent(properties.LinkedIn)
    const instagram = useExtractContent(properties.Instagram)
    const website = useExtractContent(properties['Site web'])
    const schoolsPagesId = useExtractContent(properties.Ecoles)
    const participationsPagesId = useExtractContent(properties['Participations Concours'])

    const relatedSchools = []
    for (const pageId of schoolsPagesId) {
      const school = schools.find(({ id }) => id === pageId)

      if (!school) {
        continue
      }

      const schoolName = useExtractContent(school.properties.Nom)
      relatedSchools.push({
        id: useSlugify(schoolName),
        name: schoolName
      })
    }

    const relatedParticipations = []
    for (const pageId of participationsPagesId) {
      const participation = participations.find(({ id }) => id === pageId)

      if (!participation) {
        continue
      }

      const participationName = useExtractContent(participation.properties.Nom)

      relatedParticipations.push({
        id: useSlugify(participationName),
        name: participationName
      })
    }

    await writeFile(name, 'associations', {
      id: useSlugify(name),
      name,
      description,
      category: {
        id: useSlugify(category.name),
        ...category
      },
      linkedin,
      instagram,
      website,
      schools: relatedSchools,
      participations: relatedParticipations
    })
  }
}

async function fetchAssociationsDatabase (client, databaseId) {
  const associations = await queryDatabase(client, databaseId, {
    property: 'Montrer',
    checkbox: {
      equals: true
    }
  }, [
    {
      property: 'Nom',
      direction: 'ascending'
    }
  ])

  if (!associations.length) {
    throw new Error('No associations found')
  }

  return associations
}

async function fetchSchoolsDatabase (client, databaseId) {
  const schools = await queryDatabase(client, databaseId, {
    property: 'Le Classement',
    rollup: {
      number: {
        greater_than: 0
      }
    }
  }, [
    {
      property: 'Nom',
      direction: 'ascending'
    }
  ])

  if (!schools.length) {
    throw new Error('No schools found')
  }

  return schools
}

async function fetchParticipationsDatabase (client, databaseId) {
  const participations = await queryDatabase(client, databaseId)

  if (!participations.length) {
    throw new Error('No participations found')
  }

  return participations
}

main().then(() => {
  consola.success('Script finished')
  process.exit(0)
}).catch((error) => {
  consola.fatal(error)
  process.exit(1)
})
