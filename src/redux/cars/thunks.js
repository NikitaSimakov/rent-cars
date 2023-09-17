import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCars } from './cars';

export const getCarsThunk = createAsyncThunk(
  'cars/getCars',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const { data } = await getCars(page, limit);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
