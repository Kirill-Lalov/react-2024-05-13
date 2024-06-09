import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { getUsers } from './thunks/getUsers';
import { UsersSchema } from './types';

const initialState: UsersSchema = {
  entities: {},
  ids: [],
};

const entityAdapter = createEntityAdapter();

export const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});

export const usersActions = UsersSlice.actions;
export const usersReducer = UsersSlice.reducer;
