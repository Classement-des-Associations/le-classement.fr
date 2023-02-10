import { Client } from '@notionhq/client'

/**
 * Create a Notion client
 *
 * @param {string} notionKey
 * @returns {Client}
 */
export const createNotionClient = (notionKey) => {
  return new Client({ auth: notionKey })
}
