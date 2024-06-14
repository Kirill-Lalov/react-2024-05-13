import { FC } from 'react';

import { useGetRestaurantsQuery } from '@redux/service/api/api';

import { Menu } from '@components/Menu';
import { Reviews } from '@components/Reviews';
import { ReviewForm } from '@components/ReviewForm';

export type RestaurantProps = {
  restaurantId: string;
}

export const Restaurant: FC<RestaurantProps> = ({ restaurantId, ...props }) => {
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    skip: !restaurantId,
    selectFromResult: (store) => ({ ...store, data: store.data?.find(({ id }) => id === restaurantId) }),
  });

  return (
    <div {...props}>
      <h1>{restaurant?.name}</h1>
      {restaurant?.menu !== undefined && restaurant.menu.length !== 0 && <Menu restaurantId={restaurant.id} />}
      {restaurant?.reviews !== undefined && restaurant.reviews.length !== 0 && <Reviews restaurantId={restaurant.id} />}
      {restaurant?.id !== undefined && <ReviewForm restaurantId={restaurant.id} />}
    </div>
  );
};
