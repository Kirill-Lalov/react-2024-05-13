import { SliceSchema } from '../types';

export type RestaurantType = {
  id: string;
  name: string;
  description: string;
  img: string;
  menu: string[];
  reviews?: string[];
};

export type RestaurantsSchema = SliceSchema<RestaurantType>;
