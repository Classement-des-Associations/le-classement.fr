import fs from 'node:fs'
import consola from 'consola'
import { resolve } from 'pathe'
import { useStorage } from '../_utils/_storage.mjs'
import { useEnv } from '../_utils/_env.mjs'
import { fetchDatabase } from '../_utils/_fetch.mjs'
import { createNotionClient } from '../_utils/_createNotionClient.mjs'
import { useExtractContent } from '../_utils/_extract.mjs'
import { useSlugify } from '../_utils/_slugify.mjs'

async function main () {
  consola.start('Script')

  const { schoolsDatabaseId } = useEnv()
  const client = createNotionClient()
  const storage = useStorage()

  consola.info('Fetching schools')
  // Add a way to filter only by associations that are shown (via notion)
  const schools = await fetchDatabase(client, schoolsDatabaseId, {
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
  consola.success('Schools fetched')

  if (!schools.length) {
    throw new Error('No schools found')
  }

  const startTime = new Date()
  consola.info('Extracting data')
  for await (const { properties } of schools) {
    const name = useExtractContent(properties.Nom)
    const associationsId = useExtractContent(properties.Associations)

    const associations = []
    for await (const pageId of associationsId) {
      const isAssociationCached = await storage.hasItem(pageId)
      if (isAssociationCached) {
        consola.trace(`Get association ${pageId} from cache`)
        const properties = await storage.getItem(pageId)
        const associationName = useExtractContent(properties.Nom)
        const category = useExtractContent(properties['Catégorie'])
        associations.push({
          id: useSlugify(associationName),
          name: associationName,
          category
        })
        continue
      }

      consola.trace(`Get association ${pageId} from Notion`)
      const { properties } = await client.pages.retrieve({
        page_id: pageId
      })
      const show = useExtractContent(properties.Montrer)
      if (!show) {
        consola.trace(`Association ${pageId} is not shown`)
        continue
      }
      const associationName = useExtractContent(properties.Nom)
      const category = useExtractContent(properties['Catégorie'])
      associations.push({
        id: useSlugify(associationName),
        name: associationName,
        category
      })

      consola.trace(`Cache association ${pageId}`)
      await storage.setItem(pageId, properties)
    }

    const id = useSlugify(name)
    const data = {
      id,
      name,
      associations
    }

    consola.debug('writing data')
    const filename = `_${id}.json`
    const path = resolve('content', 'ecoles', filename)
    fs.writeFileSync(
      path,
      JSON.stringify(data, null, 2),
      'utf-8'
    )
    consola.debug('Data written')
  }
  const diffTime = new Date(Date.now() - startTime.getTime())
  consola.success(`Data extracted in ${diffTime.getSeconds()}s`)

  consola.success('Script finished')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    consola.fatal(error)
    process.exit(1)
  })
