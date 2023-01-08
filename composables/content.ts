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
