import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { StoreSchema } from './types';
import { reviewsReducer } from './entities/reviews/reviews';
import { usersReducer } from './entities/users/users';
import { restaurantsReducer } from './entities/restaurants/restaurants';
import { dishesReducer } from './entities/dishes/dishes';
import { apiService } from './service/api/api';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore<StoreSchema>({
  reducer: {
    restaurants: restaurantsReducer,
    users: usersReducer,
    reviews: reviewsReducer,
    dishes: dishesReducer,
    [apiService.reducerPath]: apiService.reducer,
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
