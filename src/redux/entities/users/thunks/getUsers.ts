import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserType } from '../types';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
    const response = await fetch('http://localhost:3001/api/users');
    return (await response.json()) as UserType[];
  }
);
