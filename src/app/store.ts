/** @format */

import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from 'app/root-reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export type AppDispatch = typeof store.dispatch;
