export const useHomeAssociations = () => {
  return useAsyncData("content:home-associations", () =>
    queryContent("_home-associations").findOne()
  );
};
