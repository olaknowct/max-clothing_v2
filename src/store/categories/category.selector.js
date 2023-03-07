import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => {
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories;
  } // the only this function will run is the only when the first argument is now different
);

export const selectCategoriesMap = createSelector([selectCategories], (categories) => {
  return categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
});
