/**
 * Query a Notion database
 *
 * @param {Client} client
 * @param {string} databaseId
 * @param {Object} filter
 * @param {Object} sorts
 * @returns {Promise<Array>}
 * @throws {Error}
 */
export const queryDatabase = async (client, databaseId, filter, sorts) => {
  const data = []
  const pageSize = 20
  let startCursor

  while (true) {
    const { results, has_more: hasMore, next_cursor: nextCursor } = await client.databases.query({
      database_id: databaseId,
      page_size: pageSize,
      start_cursor: startCursor,
      filter,
      sorts
    })

    data.push(...results)

    if (hasMore) {
      startCursor = nextCursor
    }
    if (!hasMore) {
      break
    }
  }

  return data
}
