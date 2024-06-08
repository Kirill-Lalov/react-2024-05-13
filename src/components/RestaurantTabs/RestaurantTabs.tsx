import { FC } from 'react';

import { useAppSelector } from '@redux/store';

import { RestaurantTab } from '@components/RestaurantTab';

export type RestaurantsTabsProps = {
  className?: string;
  selectedRestaurantId?: string;
  onClick: (value: string | undefined) => void;
};

export const RestaurantTabs: FC<RestaurantsTabsProps> = ({ selectedRestaurantId, onClick }) => {
  const restaurantsIds = useAppSelector(store => store.restaurants.ids);

  return (
    <div>
      {restaurantsIds.map(restaurantId => (
        <RestaurantTab
          restaurantId={restaurantId}
          isActive={selectedRestaurantId === restaurantId}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
