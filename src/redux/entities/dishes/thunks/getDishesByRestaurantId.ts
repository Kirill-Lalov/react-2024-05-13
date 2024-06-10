import { createAsyncThunk } from '@reduxjs/toolkit';

import { selectRestaurantMenuIds } from '../../restaurants/selectors';
import { selectDishIds } from '../selectors';
import { DishType } from '../types';
import { StoreSchema } from '../../../types';

export const getDishesByRestaurantId = createAsyncThunk(
  'dishes/getDishesByRestaurantId',
  async (restaurantId: string) => {
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
    return (await response.json()) as DishType[];
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState() as StoreSchema;
      const loadedDishIds = selectDishIds(state);
      const restaurantMenuIds = selectRestaurantMenuIds(state, restaurantId);
      return restaurantMenuIds.some((id) => !loadedDishIds.includes(id));
    },
  }
);
