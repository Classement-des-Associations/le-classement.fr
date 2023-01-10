import { PressArticle } from "~~/types/press-article";

export const usePressArticles = () => {
  return useAsyncData("content:press-articles", () =>
    queryContent<{ body: PressArticle[] }>("_press-articles").findOne()
  );
};

export const useDumpThinkerArticles = () => {
  return useAsyncData("content:dump-thinker-articles", () =>
    queryContent("/blog/").sort({ datePublished: -1 }).limit(3).find()
  );
};

export const useRelatedArticles = () => {
  const { page } = useContent();
  const { _id, categories } = page.value;

  if (!categories || categories.length === 0) {
    throw new Error("No categories found");
  }

  return useAsyncData("content:related-articles:" + _id, () =>
    queryContent("/blog/")
      .where({
        _id: {
          $ne: _id,
        },
        categories: {
          $containsAny: categories,
        },
      })
      .sort({ datePublished: -1 })
      .limit(3)
      .find()
  );
};
