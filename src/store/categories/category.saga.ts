import { takeLatest, all, call, put } from 'typed-redux-saga';
import { getCategoriesAndDocuments } from '../../utils/firebase.utils';
import { fetchCategoriesFailed, fetchCategoriesSuccess } from './category.action';
import { CATEGORIES_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
  try {
    // you cant use async await in generator isntead of await use yield since the generator is actually the basis for async await
    // anywhere you have a function and you want to turn it into an effect use call
    // instead of await use yield.
    // yield is waiting for something to come back
    const categoriesArray = yield* call(getCategoriesAndDocuments);

    // we dont call dispatch but instead use put
    yield* put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

// the moment i hear the category action types dot start
// responding to category start
export function* onFetchCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]); // run everything inside and only complete when all of it is done
}
