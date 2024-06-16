import { FC } from 'react';

import { useGetRestaurantsQuery } from '@redux/service/api/api';

import { Preloader } from '@components/Preloader';
import { RestaurantTab } from '@components/RestaurantTab/RestaurantTab';

export type RestaurantsTabsProps = {
  className?: string;
};

export const RestaurantTabs: FC<RestaurantsTabsProps> = ({ ...props }) => {
  const { data: restaurants, isSuccess, isLoading } = useGetRestaurantsQuery();

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div {...props}>
      {isSuccess && restaurants.map(restaurant => (
        <RestaurantTab restaurantId={restaurant.id} />
      ))}
    </div>
  );
};
