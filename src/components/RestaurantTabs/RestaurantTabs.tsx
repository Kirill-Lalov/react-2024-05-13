import { FC } from 'react';

import { useAppSelector } from '@redux/store';
import { selectRestaurantIds } from '@redux/entities/restaurants/selectors';

import { RestaurantTab } from '@components/RestaurantTab';

export type RestaurantsTabsProps = {
  className?: string;
  selectedRestaurantId?: string;
  onClick: (value: string | undefined) => void;
};

export const RestaurantTabs: FC<RestaurantsTabsProps> = ({ selectedRestaurantId, onClick }) => {
  const restaurantsIds = useAppSelector(selectRestaurantIds);

  if (!restaurantsIds) {
    return null;
  }

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
