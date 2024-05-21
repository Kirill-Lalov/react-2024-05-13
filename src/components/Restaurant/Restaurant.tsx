import { FC } from 'react';

import { Menu } from '@components/Menu';
import { Reviews } from '@components/Reviews';

import { RestaurantType } from './types/Restaurant';

export type RestaurantProps = {
  restaurant: RestaurantType;
}

export const Restaurant: FC<RestaurantProps> = ({ restaurant, ...props }) => {
  return (
    <div {...props}>
      <h1>{restaurant.name}</h1>
      {restaurant.menu !== undefined && restaurant.menu.length !== 0 && <Menu menu={restaurant.menu} />}
      {restaurant.reviews !== undefined && restaurant.reviews.length !== 0 && <Reviews reviews={restaurant.reviews} />}
    </div>
  );
};
