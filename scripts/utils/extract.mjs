/**
 * Extracts the content of a Notion property
 *
 * @param {Object} property
 * @returns {string|Object}
 */
export const useExtractContent = function (property) {
  switch (property.type) {
    case 'title':
      return property.title[0]?.plain_text
    case 'rich_text':
      return property.rich_text[0]?.plain_text
    case 'select':
      return { name: property.select?.name, color: property.select?.color }
    case 'url':
      return property.url
    case 'relation':
      return property.relation?.map(relation => relation.id)
    case 'checkbox':
      return property.checkbox
  }
}
