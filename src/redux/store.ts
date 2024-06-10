import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { StoreSchema } from './types';
import { reviewsReducer } from './entities/reviews/reviews';
import { usersReducer } from './entities/users/users';
import { restaurantsReducer } from './entities/restaurants/restaurants';
import { dishesReducer } from './entities/dishes/dishes';

export const store = configureStore<StoreSchema>({
  reducer: {
    restaurants: restaurantsReducer,
    users: usersReducer,
    reviews: reviewsReducer,
    dishes: dishesReducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
