import { PressArticle } from "~~/types/press-article";

export const usePressArticles = () => {
  return useAsyncData("content:press-articles", () =>
    queryContent<{ body: PressArticle[] }>("_press-articles").findOne()
  );
};
