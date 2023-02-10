import slugify from 'slugify'

/**
 * Slugify a text
 *
 * @param {string} text
 * @returns {string}
 */
export const useSlugify = function (text) {
  return slugify(text, {
    replacement: '-',
    lower: true,
    strict: true,
    locale: 'fr',
    trim: true
  })
}
