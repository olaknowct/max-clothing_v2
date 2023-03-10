import { configureStore } from '@reduxjs/toolkit';
// import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
// // import { loggerMiddleware } from './middleware/logger';
import { rootReducer } from './root-reducer';

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'], // array of values you dont want to persist
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean); //tecnique : see redux-devtools section how

// const composeEnhancers =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares));

// // Root-reducer
export const store = configureStore({
  reducer: rootReducer, // points to reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares), // has default middleware but if we passed an array then default are override, oth function let you use configured middleware + default
});

// export const persistor = persistStore(store);
