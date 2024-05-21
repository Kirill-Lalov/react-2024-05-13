import { DishType } from '@components/Dish';
import { ReviewType } from '@components/Review';

export type RestaurantType = {
  id: string;
  name: string;
  menu?: DishType[];
  reviews?: ReviewType[];
};
