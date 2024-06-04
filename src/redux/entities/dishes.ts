import { createSlice } from '@reduxjs/toolkit';

import { normalizedDishes } from '../../../materials/normalized-mock';
import { SliceType } from './types';

const initialState: SliceType<typeof normalizedDishes[0]> = {
  entities: normalizedDishes.reduce((accumulator, dish) => {
    accumulator[dish.id] = dish;
    return accumulator;
  }, {} as Record<string, typeof normalizedDishes[0]>),
  ids: normalizedDishes.map(dish => dish.id),
};

export const DishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
});
