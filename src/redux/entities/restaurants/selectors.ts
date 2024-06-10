import { StoreSchema } from '../../types';

export const selectRestaurantsModule = (state: StoreSchema) => state.restaurants;

export const selectRestaurantById = (state: StoreSchema, id: string) => selectRestaurantsModule(state).entities[id];

export const selectRestaurantEntities = (state: StoreSchema) => selectRestaurantsModule(state).entities;

export const selectRestaurantIds = (state: StoreSchema) => selectRestaurantsModule(state).ids;

export const selectRestaurantReviewIds = (state: StoreSchema, id: string) => selectRestaurantById(state, id).reviews;

export const selectRestaurantMenuIds = (state: StoreSchema, id: string) => selectRestaurantById(state, id).menu;
