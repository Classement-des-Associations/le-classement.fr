import type { PressArticle } from '~~/types/press-article'
import { Duel } from '~~/types/duel'
import { ConcoursExercice } from '~~/types/concours-exercice'
import { TimelineItem } from '~~/types/timeline'

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
    .only(['title', 'datePublished', 'image', '_path', 'press'])
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

export const useDumpThinkerReleases = () => {
  return useAsyncData('content:dump-thinker-releases', () =>
    queryContent('/presse/').where({ _extension: 'md' }).sort({ datePublished: -1 }).limit(3).find()
  )
}

export const useArticles = () => {
  return useAsyncData('content:articles', () =>
    queryContent('/blog/').sort({ datePublished: -1 }).find()
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

export const usePartners = () => {
  return useAsyncData('content:partners', () =>
    queryContent('/partenaires/').sort({ title: 1 }).find()
  )
}

export const useDuels = (id: string) => {
  return useAsyncData(`content:duels:${id}`, () =>
    queryContent<{ body: Duel[] }>(`/classement/_${id}`).findOne()
  )
}

export const useConcoursExercices = () => {
  return useAsyncData('content:concours-exercices', () =>
    queryContent<{ body: ConcoursExercice[] }>(
      '/classement/_concours-exercices'
    ).where({
      _partial: true,
      _extension: 'json'
    }).findOne()
  )
}

export const useTimeline = () => {
  return useAsyncData('content:timeline', () =>
    queryContent<{ body: TimelineItem[] }>('/calendrier/data').where({ _extension: 'json' }).findOne()
  )
}
