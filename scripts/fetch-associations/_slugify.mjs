import slugify from 'slugify'

export const useSlugify = function (text) {
  return slugify(text, {
    replacement: '-',
    lower: true,
    strict: true,
    locale: 'fr',
    trim: true
  })
}
