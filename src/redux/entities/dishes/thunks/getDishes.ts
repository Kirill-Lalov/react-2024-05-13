import { createAsyncThunk } from '@reduxjs/toolkit';

import { DishType } from '../types';

export const getDishes = createAsyncThunk(
  'dishes/getDishes',
  async () => {
    const response = await fetch('http://localhost:3001/api/products');
    return (await response.json()) as DishType[];
  }
);
