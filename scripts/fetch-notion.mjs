import fs from 'node:fs'
import consola from 'consola'
import { resolve } from 'pathe'
import { createNotionClient } from './_utils/createNotionClient.mjs'
import { useEnv } from './_utils/env.mjs'
import { useStorage } from './_utils/storage.mjs'
import { fetchDatabase } from './_utils/fetch.mjs'
import { useExtractContent } from './_utils/extract.mjs'
import { useSlugify } from './_utils/slugify.mjs'

async function main () {
  consola.start('Script', 'Fetch Notion')

  consola.info('Cleaning data')
  const options = { recursive: true, force: true }
  fs.rmSync(resolve('content/participations'), options)
  fs.rmSync(resolve('content/categories'), options)
  fs.rmSync(resolve('content/ecoles'), options)
  fs.rmSync(resolve('content/associations'), options)

  consola.info('Creating directories')
  fs.mkdirSync(resolve('content/participations/2022'), { recursive: true })
  fs.mkdirSync(resolve('content/categories'), { recursive: true })
  fs.mkdirSync(resolve('content/ecoles'), { recursive: true })
  fs.mkdirSync(resolve('content/associations'), { recursive: true })

  const { participationsDatabaseId, schoolsDatabaseId, associationsDatabaseId, notionKey } = useEnv()
  const client = createNotionClient(notionKey)
  const storage = useStorage()

  // Fetch associations
  const startTimeFetchAssociations = new Date()
  const associations = await fetchAssociationsDatabase(client, associationsDatabaseId)
  consola.info(`Associations fetched in ${new Date() - startTimeFetchAssociations}ms`)
  await storage.setItem('associations', associations)

  // Fetch schools
  const startTimeFetchSchools = new Date()
  const schools = await fetchSchoolsDatabase(client, schoolsDatabaseId)
  await storage.setItem('schools', schools)
  consola.info(`Schools fetched in ${new Date() - startTimeFetchSchools}ms`)

  const startTimeFetchParticipations = new Date()
  const participations = await fetchParticipationsDatabase(client, participationsDatabaseId)
  await storage.setItem('participations', participations)
  consola.info(`Participations fetched in ${new Date() - startTimeFetchParticipations}ms`)

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

    writeFile(name, 'participations/2022', {
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
    writeFile(category, 'categories', {
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

    writeFile(name, 'ecoles', {
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

    writeFile(name, 'associations', {
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
  const associations = await fetchDatabase(client, databaseId, {
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
  const schools = await fetchDatabase(client, databaseId, {
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
  const participations = await fetchDatabase(client, databaseId)

  if (!participations.length) {
    throw new Error('No participations found')
  }

  return participations
}

function writeFile (name, folder, data) {
  const filename = useFilename(name)
  const filepath = resolve('content', folder, filename)

  fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf-8')
}

function useFilename (name) {
  return `_${useSlugify(name)}.json`
}

main().then(() => {
  consola.success('Script finished')
  process.exit(0)
}).catch((error) => {
  consola.fatal(error)
  process.exit(1)
})
