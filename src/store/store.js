import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
// import { loggerMiddleware } from './middleware/logger';
import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'], // array of values you dont want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean); //tecnique : see redux-devtools section how

const composedEnhancers = compose(applyMiddleware(...middlewares));
// Root-reducer
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);
