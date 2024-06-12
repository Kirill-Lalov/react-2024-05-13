import { createSlice } from '@reduxjs/toolkit';

import { normalizedDishes } from '../../../materials/normalized-mock';
import { SliceSchema } from './types';

const initialState: SliceSchema<typeof normalizedDishes[0]> = {
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
