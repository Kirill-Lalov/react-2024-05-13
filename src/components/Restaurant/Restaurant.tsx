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
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
