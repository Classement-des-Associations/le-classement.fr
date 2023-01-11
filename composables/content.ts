import { PressArticle } from "~~/types/press-article";
import { Association } from "~~/types/association";

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

export const useAssociations = () => {
  return useAsyncData("content:associations", () =>
    queryContent<{ body: Association[] }>("_associations").findOne()
  );
};

export const useAssociation = async (id: string | number) => {
  const { data: associations } = await useAssociations();

  if (!associations.value) {
    throw new Error("Associations not found");
  }

  const association = associations.value.body.find(
    (association) => association._id === id
  );

  if (!association) {
    throw new Error("Association not found");
  }

  return association;
};
