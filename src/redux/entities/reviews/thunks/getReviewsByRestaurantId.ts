import { createAsyncThunk } from '@reduxjs/toolkit';

import { selectReviewIds } from '../selectors';
import { selectRestaurantReviewIds } from '../../restaurants/selectors';
import { ReviewType } from '../types';
import { StoreSchema } from '../../../types';

export const getReviewsByRestaurantId = createAsyncThunk(
  'reviews/getReviewsByRestaurantId',
  async (restaurantId: string) => {
    const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
    return (await response.json()) as ReviewType[];
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState() as StoreSchema;
      const loadedReviewIds = selectReviewIds(state);
      const restaurantReviewIds = selectRestaurantReviewIds(state, restaurantId);
      return restaurantReviewIds?.some((id) => !loadedReviewIds.includes(id));
    },
  }
);
