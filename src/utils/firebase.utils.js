import { initializeApp } from 'firebase/app';

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // google create an object that are not persisted in database
  // this object is a reference that google can use and get/set to db
  const userDocRef = doc(db, 'users', userAuth.uid);

  // has method of exist. since getdoc is just getting some doc based on the ref we passed, doesn mean it is created in db
  const userSnapshot = await getDoc(userDocRef);
};
