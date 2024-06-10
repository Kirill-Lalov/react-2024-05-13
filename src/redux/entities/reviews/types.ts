import { SliceSchema } from '../types';

export type ReviewType = {
  id: string;
  userId: string;
  text: string;
  rating: number;
};

export type ReviewsSchema = SliceSchema<ReviewType>;
