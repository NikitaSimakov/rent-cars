import { createSlice } from '@reduxjs/toolkit';
import { getCarsThunk } from './thunks';

const carsState = {
  cars: [],
  error: '',
  isLoading: false,
  isRefreshing: false,
  isEndOfCards: false,
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState: carsState,
  extraReducers: builder => {
    builder
      .addCase(getCarsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCarsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cars =
          state.cars[0]?.id === payload[0]?.id
            ? payload
            : [...state.cars, ...payload];
        if (payload.length < 8) state.isEndOfCards = true;
      })

      .addMatcher(
        action => {
          action.type.endsWith('/rejected');
        },
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const carsReducer = carsSlice.reducer;
