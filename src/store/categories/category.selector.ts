import { createSelector } from 'reselect';

import { CategoriesState } from './category.reducer';

import { CategoryMap } from './category.types';
import { RootState } from '../store';

const selectCategoryReducer = (state: RootState): CategoriesState => {
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories;
  } // the only this function will run is the only when the first argument is now different
);

export const selectCategoriesMap = createSelector([selectCategories], (categories): CategoryMap => {
  return categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as CategoryMap);
});

export const selectCategoriesisLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
