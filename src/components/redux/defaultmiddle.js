import { LOCAL_STORAGE_KEY } from '../../data/localStorageKey';
import { getDefaultMiddleware   } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const persistConfig = {
  key: LOCAL_STORAGE_KEY,
  storage,
  blacklist: ['filter'],
};

export const middleware = [
  ...getDefaultMiddleware  ({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];