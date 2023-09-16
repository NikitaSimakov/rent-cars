import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCars } from './cars';

export const getCarsThunk = createAsyncThunk(
  'cars/getCars',
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await getCars(page);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
