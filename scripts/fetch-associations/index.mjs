import fs from 'node:fs'
import * as dotenv from 'dotenv'
import { Client } from '@notionhq/client'
import consola from 'consola'
import { resolve } from 'pathe'
import { useEnv } from './_env.mjs'
import { useExtractContent } from './_extract.mjs'
import { useSlugify } from './_slugify.mjs'
import { storage } from './_storage.mjs'
dotenv.config()

async function main () {
  consola.start('Starting script')

  consola.info('Loading env')
  const { notionKey, associationsDatabaseId } = useEnv()

  consola.info('Connecting to Notion')
  const notion = new Client({ auth: notionKey })

  consola.info('Fetching associations')
  const associations = []
  const pageSize = 20
  let startCursor
  while (true) {
    const { results, has_more: hasMore, next_cursor: nextCursor } = await notion.databases.query({
      database_id: associationsDatabaseId,
      page_size: pageSize,
      start_cursor: startCursor,
      filter: {
        property: 'Montrer',
        checkbox: {
          equals: true
        }
      },
      sorts: [
        {
          property: 'Nom',
          direction: 'ascending'
        }
      ]
    })
    associations.push(...results)

    if (hasMore) {
      startCursor = nextCursor
    }
    if (!hasMore) {
      break
    }
  }
  consola.success('Associations fetched')

  if (!associations) {
    throw new Error('No associations found')
  }

  const startTime = new Date()
  consola.info('Extracting data')
  for await (const { properties } of associations) {
    const name = useExtractContent(properties.Nom)
    const description = useExtractContent(properties.Description)
    const category = useExtractContent(properties['Catégorie'])
    const linkedin = useExtractContent(properties.LinkedIn)
    const instagram = useExtractContent(properties.Instagram)
    const website = useExtractContent(properties['Site web'])
    const schoolsPagesId = useExtractContent(properties.Ecoles)
    const participationsPagesId = useExtractContent(properties.Participations)

    const schools = []
    for await (const pageId of schoolsPagesId) {
      const isSchoolCached = await storage.hasItem(pageId)
      if (isSchoolCached) {
        consola.trace(`Get school ${pageId} from cache`)
        const properties = await storage.getItem(pageId)
        const schoolName = useExtractContent(properties.Nom)
        schools.push(schoolName)
        continue
      }

      consola.trace(`Get school ${pageId} from Notion`)
      const { properties } = await notion.pages.retrieve({
        page_id: pageId,
        sorts: [
          {
            property: 'Nom',
            direction: 'ascending'
          }
        ]
      })
      await storage.setItem(pageId, properties)

      const schoolName = useExtractContent(properties.Nom)
      schools.push(schoolName)
    }

    const years = []
    for await (const pageId of participationsPagesId) {
      const isParticipationCached = await storage.hasItem(pageId)
      if (isParticipationCached) {
        consola.trace(`Get participation ${pageId} from cache`)
        const properties = await storage.getItem(pageId)
        const year = useExtractContent(properties.Nom)
        years.push(year)
        continue
      }

      consola.trace(`Get participation ${pageId} from Notion`)
      const { properties } = await notion.pages.retrieve({
        page_id: pageId,
        sorts: [
          {
            property: 'Nom',
            direction: 'ascending'
          }
        ]
      })
      await storage.setItem(pageId, properties)

      const year = useExtractContent(properties.Nom)
      years.push(year)
    }

    const id = useSlugify(name)
    const data = {
      id,
      name,
      description,
      category,
      schools,
      linkedin,
      instagram,
      website,
      years
    }

    consola.debug('Writing data')
    const filename = `_${id}.json`
    const path = resolve('content', 'associations', filename)
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
  .catch((err) => {
    consola.fatal(err)
    process.exit(1)
  })
