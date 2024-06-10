import { StoreSchema } from '../../types';

export const selectReviewsModule = (state: StoreSchema) => state.reviews;

export const selectReviewById = (state: StoreSchema, id: string) => selectReviewsModule(state).entities[id];

export const selectReviewEntities = (state: StoreSchema) => selectReviewsModule(state).entities;

export const selectReviewIds = (state: StoreSchema) => selectReviewsModule(state).ids;
