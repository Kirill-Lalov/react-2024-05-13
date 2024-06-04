import { createSlice } from '@reduxjs/toolkit';

import { normalizedRestaurants } from '../../../materials/normalized-mock';

export const RestaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    entities: normalizedRestaurants.reduce((accumulator, restaurant) => {
      accumulator[restaurant.id] = restaurant;
      return accumulator;
    }, {}  as Record<string, typeof normalizedRestaurants[0]>),
    ids: normalizedRestaurants.map(restaurant => restaurant.id),
  },
  reducers: {},
});
