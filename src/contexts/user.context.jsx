import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';
// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled Type ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

// actual component
export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  const value = { currentUser, setCurrentUser };

  // signOutUser(); // if you want to signout from firebase

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// reducer is a function that returns an ojbect
// const userReducer = (state, action) => {
//   return {
//     currentUser: null,
//   };
// };
