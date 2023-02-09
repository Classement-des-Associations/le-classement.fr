import { Client } from '@notionhq/client'

export const createNotionClient = (notionKey) => {
  return new Client({ auth: notionKey })
}
