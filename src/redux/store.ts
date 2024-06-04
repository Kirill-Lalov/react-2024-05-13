import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { DishesSlice } from './entities/dishes';
import { RestaurantsSlice } from './entities/restaurants';
import { ReviewsSlice } from './entities/reviews';
import { UsersSlice } from './entities/users';

export const store = configureStore({
  reducer: combineSlices(
    DishesSlice,
    RestaurantsSlice,
    ReviewsSlice,
    UsersSlice
  ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
