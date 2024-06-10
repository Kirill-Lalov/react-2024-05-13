import { SliceSchema } from '../types';

export type DishType = {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
};

export type DishesSchema = SliceSchema<DishType>;
