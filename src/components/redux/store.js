import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from './reducer';
import { persistConfig, middleware } from './defaultmiddle';

export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, reducer),
  },
  middleware,
});

export const persistor = persistStore(store);