import { StoreSchema } from '../../types';

export const selectUsersModule = (state: StoreSchema) => state.users;

export const selectUserById = (state: StoreSchema, id: string) => selectUsersModule(state).entities[id];

export const selectUserEntities = (state: StoreSchema) => selectUsersModule(state).entities;

export const selectUserIds = (state: StoreSchema) => selectUsersModule(state).ids;
