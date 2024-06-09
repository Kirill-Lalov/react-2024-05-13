import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { getDishes } from './thunks/getDishes';
import { getDishesByRestaurantId } from './thunks/getDishesByRestaurantId';
import { DishesSchema } from './types';

const initialState: DishesSchema = {
  entities: {},
  ids: [],
};

const entityAdapter = createEntityAdapter();

export const DishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(getDishes.fulfilled, (store, { payload }) => {
      entityAdapter.setAll(store, payload);
    })
    .addCase(getDishesByRestaurantId.fulfilled, (store, { payload }) => {
      entityAdapter.setMany(store, payload);
    }),
});

export const dishesActions = DishesSlice.actions;
export const dishesReducer = DishesSlice.reducer;
