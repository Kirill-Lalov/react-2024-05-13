import { createAsyncThunk } from '@reduxjs/toolkit';

import { RestaurantType } from '../types';

export const getRestaurants = createAsyncThunk(
  'restaurants/getRestaurants',
  async () => {
    const response = await fetch('http://localhost:3001/api/restaurants');
    return (await response.json()) as RestaurantType[];
  }
);
