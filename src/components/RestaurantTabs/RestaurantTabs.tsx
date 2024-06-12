import { FC } from 'react';

import { useGetRestaurantsQuery } from '@redux/service/api/api';

import { Preloader } from '@components/Preloader';
import { Tab } from '@components/Tab';

export type RestaurantsTabsProps = {
  className?: string;
  selectedRestaurantId?: string;
  onClick: (value: string | undefined) => void;
};

export const RestaurantTabs: FC<RestaurantsTabsProps> = ({ selectedRestaurantId, onClick, ...props }) => {
  const { data: restaurants, isSuccess, isLoading } = useGetRestaurantsQuery();

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div {...props}>
      {isSuccess && restaurants.map(restaurant => (
        <Tab
          label={restaurant.name}
          isActive={restaurant.id === selectedRestaurantId}
          onClick={() => onClick(restaurant.id)}
        />
      ))}
    </div>
  );
};
