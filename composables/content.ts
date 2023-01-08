export const useDumpThinkerArticles = () => {
  return useAsyncData("content:dump-thinker-articles", () =>
    queryContent("/blog/").sort({ datePublished: -1 }).limit(3).find()
  );
};
