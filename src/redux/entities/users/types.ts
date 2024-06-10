import { SliceSchema } from '../types';

export type UserType = {
  id: string;
  name: string;
};

export type UsersSchema = SliceSchema<UserType>;
