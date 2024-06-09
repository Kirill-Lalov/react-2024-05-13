import { FC } from 'react';

import { useAppSelector } from '@redux/store';
import { selectRestaurantById } from '@redux/entities/restaurants/selectors';

import { Menu } from '@components/Menu';
import { Reviews } from '@components/Reviews';
import { ReviewForm } from '@components/ReviewForm';

export type RestaurantProps = {
  restaurantId: string;
}

export const Restaurant: FC<RestaurantProps> = ({ restaurantId, ...props }) => {
  const restaurant = useAppSelector((store) => selectRestaurantById(store, restaurantId));

  return (
    <div {...props}>
      <h1>{restaurant.name}</h1>
      {restaurant.menu !== undefined && restaurant.menu.length !== 0 && <Menu restaurantId={restaurant.id} />}
      {restaurant.reviews !== undefined && restaurant.reviews.length !== 0 && <Reviews restaurantId={restaurant.id} />}
      <ReviewForm />
    </div>
  );
};
