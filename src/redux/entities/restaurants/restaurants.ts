import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { getRestaurants } from './thunks/getRestaurants';
import { RestaurantsSchema } from './types';

const initialState: RestaurantsSchema = {
  entities: {},
  ids: [],
};

const entityAdapter = createEntityAdapter();

export const RestaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(getRestaurants.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});

export const restaurantsActions = RestaurantsSlice.actions;
export const restaurantsReducer = RestaurantsSlice.reducer;
