import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener } from '../utils/firebase.utils';

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// actual component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // signOutUser(); // if you want to signout from firebase

  // unsubcribe once run
  useEffect(() => {
    // call back will run every time there is changes from our auth
    // checks if user are authenticate
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
