import { takeLatest, all, call } from 'typed-redux-saga/macro';
import { USER_ACTION_TYPES } from './user.types';
import {
  isUserAuthenticated,
  signInAfterSignup,
  signInWithEmail,
  signInWithGoogle,
  signOut,
  signUp,
} from './user.worker.saga';

export function* onGoogleSignInStartListener() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSessionListener() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStartListener() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStartListener() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccessListener() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignup);
}

export function* onSignOutStartListener() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSessionListener),
    call(onGoogleSignInStartListener),
    call(onEmailSignInStartListener),
    call(onSignUpStartListener),
    call(onSignUpSuccessListener),
    call(onSignOutStartListener),
  ]);
}
