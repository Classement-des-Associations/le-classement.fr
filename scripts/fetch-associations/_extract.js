export const useExtractContent = function (property) {
  switch (property.type) {
    case "title":
      return property.title[0].plain_text;
    case "select":
      return property.select?.name;
    case "relation":
      return property.relation?.map((relation) => relation.id);
  }
};
