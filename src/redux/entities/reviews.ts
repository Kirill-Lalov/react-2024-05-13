import { createSlice } from '@reduxjs/toolkit';

import { normalizedReviews } from '../../../materials/normalized-mock';

export const ReviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    entities: normalizedReviews.reduce((accumulator, review) => {
      accumulator[review.id] = review;
      return accumulator;
    }, {} as Record<string, typeof normalizedReviews[0]>),
    ids: normalizedReviews.map(review => review.id),
  },
  reducers: {},
});
