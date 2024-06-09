import { StoreSchema } from '../../types';

export const selectDishesModule = (state: StoreSchema) => state.dishes;

export const selectDishById = (state: StoreSchema, id: string) => selectDishesModule(state).entities[id];

export const selectDishEntities = (state: StoreSchema) => selectDishesModule(state).entities;

export const selectDishIds = (state: StoreSchema) => selectDishesModule(state).ids;
