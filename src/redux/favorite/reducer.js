import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { carsReducer } from '../cars/slice';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const favoriteInitialState = [];
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorite'],
};

export const favoriteReducer = (state = favoriteInitialState, action) => {
  switch (action.type) {
    case 'favorite/addFavorite':
      return (state = [...state, action.payload]);
    case 'favorite/deleteFavorite':
      return state.filter(favorite => favorite !== action.payload);
      break;
    default:
      return state;
  }
};

export const reducer = combineReducers({
  cars: carsReducer,
  favorite: favoriteReducer,
});

export const persistedReducer = persistReducer(persistConfig, reducer);
