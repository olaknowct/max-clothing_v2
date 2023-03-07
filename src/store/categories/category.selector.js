export const selectCategoriesMap = (state) => {
  console.log('Selector fired');
  const categoriesMap = state.categories.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoriesMap;
};
