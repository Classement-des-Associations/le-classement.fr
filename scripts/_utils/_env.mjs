import * as dotenv from 'dotenv'
dotenv.config()

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

  return {
    notionKey,
    associationsDatabaseId,
    schoolsDatabaseId
  }
}
