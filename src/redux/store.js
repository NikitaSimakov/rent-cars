import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars/slice';
import { favoriteReducer } from './favorite/reducer';

export const reducer = combineReducers({
  cars: carsReducer,
  favorite: favoriteReducer,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
