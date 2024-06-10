import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { getReviews } from './thunks/getReviews';
import { getReviewsByRestaurantId } from './thunks/getReviewsByRestaurantId';
import { ReviewsSchema } from './types';

const initialState: ReviewsSchema = {
  entities: {},
  ids: [],
};

const entityAdapter = createEntityAdapter();

export const ReviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(getReviews.fulfilled, (store, { payload }) => {
      entityAdapter.setAll(store, payload);
    })
    .addCase(getReviewsByRestaurantId.fulfilled, (store, { payload }) => {
      entityAdapter.setMany(store, payload);
    }),
});

export const reviewsActions = ReviewsSlice.actions;
export const reviewsReducer = ReviewsSlice.reducer;
