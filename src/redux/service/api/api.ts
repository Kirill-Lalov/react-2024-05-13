import { DishType } from '@redux/entities/dishes/types';
import { RestaurantType } from '@redux/entities/restaurants/types';
import { ReviewType } from '@redux/entities/reviews/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiService = createApi({
  reducerPath: 'api',
  tagTypes: ['Review', 'Restaurant'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantType[], void>({
      query: () => ({
        url: 'restaurants',
      }),
    }),
    getMenuByRestaurantId: builder.query<DishType[], string>({
      query: (restaurantId: string) => ({
        url: 'dishes',
        params: { restaurantId },
      }),
    }),
    getReviewsByRestaurantId: builder.query<ReviewType[], string>({
      query: (restaurantId: string) => ({
        url: 'reviews',
        params: { restaurantId },
      }),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      providesTags: (result, _, restaurantId) =>
        result
          ?.map(({ id }) => ({ type: 'Review', id }))
          .concat(
            { type: 'Review', id: 'All' },
            { type: 'Restaurant', id: restaurantId }
          ),
    }),
    createReview: builder.mutation({
      query: ({ restaurantId, review }: { restaurantId: string; review: Pick<ReviewType, 'userId' | 'text' | 'rating'> }) => ({
        url: `review/${restaurantId}`,
        method: 'POST',
        body: review,
      }),
      invalidatesTags: (_, __, { restaurantId }) => [
        { type: 'Restaurant', id: restaurantId },
      ],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetMenuByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useCreateReviewMutation,
} = apiService;
