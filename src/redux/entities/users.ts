import { createSlice } from '@reduxjs/toolkit';

import { normalizedUsers } from '../../../materials/normalized-mock';

export const UsersSlice = createSlice({
  name: 'users',
  initialState: {
    entities: normalizedUsers.reduce((accumulator, user) => {
      accumulator[user.id] = user;
      return accumulator;
    }, {} as Record<string, typeof normalizedUsers[0]>),
  },
  reducers: {},
});
