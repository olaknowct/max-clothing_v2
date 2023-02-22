import { initializeApp } from 'firebase/app';

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDLtFdI80oFIeIYUSlhY_AKWsWMlSQ6qVM',
  authDomain: 'crwn-clothing-db-fbe9f.firebaseapp.com',
  projectId: 'crwn-clothing-db-fbe9f',
  storageBucket: 'crwn-clothing-db-fbe9f.appspot.com',
  messagingSenderId: '759776147104',
  appId: '1:759776147104:web:45e4dfcd8448a33514bbc5',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  promp: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
