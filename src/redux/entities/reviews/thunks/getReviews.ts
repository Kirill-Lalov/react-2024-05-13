import { createAsyncThunk } from '@reduxjs/toolkit';

import { ReviewType } from '../types';

export const getReviews = createAsyncThunk(
  'reviews/getReviews',
  async () => {
    const response = await fetch('http://localhost:3001/api/reviews');
    return (await response.json()) as ReviewType[];
  }
);
