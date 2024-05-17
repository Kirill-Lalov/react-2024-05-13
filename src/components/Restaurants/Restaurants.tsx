import { FC } from 'react';

import { Restaurant, RestaurantType } from '@components/Restaurant';

export type RestaurantsProps = {
  restaurants: RestaurantType[];
};

export const Restaurants: FC<RestaurantsProps> = ({ restaurants, ...props }) => {
  return (
    <div {...props}>
      {restaurants.map(restaurant => (
        <Restaurant restaurant={restaurant} />
      ))}
    </div>
  );
};
