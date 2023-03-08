import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
// import { loggerMiddleware } from './middleware/logger';
import { rootReducer } from './root-reducer';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'], // array of values you dont want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean); //tecnique : see redux-devtools section how

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares));

// Root-reducer
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);
