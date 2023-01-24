import type { PressArticle } from '~~/types/press-article'
import type { Association } from '~~/types/association'

export const usePressExternalArticles = () => {
  return useAsyncData('content:press-external-articles', () =>
    queryContent<{ body: PressArticle[] }>(
      '/presse/_press-external-articles'
    ).findOne()
  )
}

export const usePressReleases = (limit?: number) => {
  const query = queryContent('/presse/')
    .sort({ datePublished: -1 })
    .where({ _extension: 'md' })
    .only(['title', 'datePublished', 'image', '_path'])
  if (limit) { query.limit(limit) }

  const key = limit
    ? `content:press-releases-${limit}`
    : 'content:press-releases'

  return useAsyncData(key, () => query.find())
}

export const useHomeAssociations = () => {
  return useAsyncData('content:home-associations', () =>
    queryContent('_home-associations').findOne()
  )
}

export const useDumpThinkerArticles = () => {
  return useAsyncData('content:dump-thinker-articles', () =>
    queryContent('/blog/').sort({ datePublished: -1 }).limit(3).find()
  )
}

export const useRelatedArticles = () => {
  const { page } = useContent()
  const { _id, categories } = page.value

  if (!categories || categories.length === 0) { throw new Error('No categories found') }

  return useAsyncData(`content:related-articles:${_id}`, () =>
    queryContent('/blog/')
      .where({
        _id: {
          $ne: _id
        },
        categories: {
          $containsAny: categories
        }
      })
      .sort({ datePublished: -1 })
      .limit(3)
      .find()
  )
}

export const useArticlesByCategories = (
  categories: string[],
  limit: number
) => {
  return useAsyncData(
    `content:articles-by-categories-${categories.join('-')}-${limit}`,
    () =>
      queryContent('/blog/')
        .where({
          categories: {
            $containsAny: categories
          }
        })
        .limit(limit)
        .sort({ datePublished: -1 })
        .find()
  )
}

export const useAssociations = () => {
  return useAsyncData('content:associations', () =>
    queryContent<Association>('/associations/').where({
      _partial: true,
      _extension: 'json'
    }).find()
  )
}

export const useAssociation = (id: string) => {
  return useAsyncData(`content:association:${id}`, () =>
    queryContent<Association>(`/associations/_${id}`).where({
      _partial: true,
      _extension: 'json'
    }).findOne()
  )
}

export const useRelatedAssociations = (id: string, category = '') => {
  return useAsyncData(`content:related-associations:${id}:${category}`, () =>
    queryContent<Association>('/associations/')
      .where({
        id: {
          $ne: id
        },
        category: {
          $eq: category
        },
        _partial: true,
        _extension: 'json'
      })
      .sort({ name: 1 })
      .find()
  )
}
