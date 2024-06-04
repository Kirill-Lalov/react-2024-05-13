import { FC } from 'react';

import { useAppSelector } from '@redux/store';

import { Menu } from '@components/Menu';
import { Reviews } from '@components/Reviews';
import { ReviewForm } from '@components/ReviewForm';

export type RestaurantProps = {
  restaurantId: string;
}

export const Restaurant: FC<RestaurantProps> = ({ restaurantId, ...props }) => {
  const restaurant = useAppSelector(store => store.restaurants.entities[restaurantId]);

  return (
    <div {...props}>
      <h1>{restaurant.name}</h1>
      {restaurant.menu !== undefined && restaurant.menu.length !== 0 && <Menu menuIds={restaurant.menu} />}
      {restaurant.reviews !== undefined && restaurant.reviews.length !== 0 && <Reviews reviewIds={restaurant.reviews} />}
      <ReviewForm />
    </div>
  );
};
