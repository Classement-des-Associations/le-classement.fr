import * as dotenv from 'dotenv'
dotenv.config()

/**
 * Use environment variables
 *
 * @typedef {Object} Env
 * @property {string} notionKey
 * @property {string} associationsDatabaseId
 * @property {string} schoolsDatabaseId
 * @property {string} participationsDatabaseId
 * @returns {Env}
 * @throws {Error}
 */
export const useEnv = function () {
  const notionKey = process.env.NOTION_KEY
  if (!notionKey) {
    throw new Error('No notion key found')
  }

  const associationsDatabaseId = process.env.NOTION_ASSOCIATIONS_DATABASE_ID
  if (!associationsDatabaseId) {
    throw new Error('No association database ID found')
  }

  const schoolsDatabaseId = process.env.NOTION_SCHOOLS_DATABASE_ID
  if (!schoolsDatabaseId) {
    throw new Error('No school database ID found')
  }

  const participationsDatabaseId = process.env.NOTION_PARTICIPATIONS_DATABASE_ID
  if (!participationsDatabaseId) {
    throw new Error('No participation database ID found')
  }

  return {
    notionKey,
    associationsDatabaseId,
    schoolsDatabaseId,
    participationsDatabaseId
  }
}
