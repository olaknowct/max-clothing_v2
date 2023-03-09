import { takeLatest, all, call, put } from 'redux-saga/effects';
import { createUserDocumentFromAuth, getCurrentUser } from '../../utils/firebase.utils';
import { signInFailed, signInSuccess } from './user.actions';
import { USER_ACTION_TYPES } from './user.types';

export function* getSnapshotFromUserAuth(userAuth, additionalDetail) {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetail); // same as createUserDocumentFromAuth(auth, details)
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([call(onCheckUserSession)]);
}
