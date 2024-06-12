import { DishesSchema } from './entities/dishes/types';
import { RestaurantsSchema } from './entities/restaurants/types';
import { ReviewsSchema } from './entities/reviews/types';
import { UsersSchema } from './entities/users/types';
import { apiService } from './service/api/api';
import { store } from './store';

export type StoreSchema = {
  dishes: DishesSchema;
  restaurants: RestaurantsSchema;
  reviews: ReviewsSchema;
  users: UsersSchema;
  [apiService.reducerPath]: ReturnType<typeof apiService.reducer>;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
