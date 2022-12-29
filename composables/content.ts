export const useRelatedArticles = () => {
  const { page } = useContent();
  const { _id, categories } = page.value;

  console.log("useRelatedArticles", _id, categories);

  return useAsyncData("content:relatedArticles:" + _id, () =>
    queryContent("/blog/")
      .where({
        _id: {
          $ne: _id,
        },
        categories: {
          $containsAny: categories,
        },
      })
      .limit(3)
      .find()
  );
};
