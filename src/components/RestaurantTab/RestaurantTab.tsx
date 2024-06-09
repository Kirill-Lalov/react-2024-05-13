import { FC } from 'react';

import { useAppSelector } from '@redux/store';
import { selectRestaurantById } from '@redux/entities/restaurants/selectors';

import { Tab, TabProps } from '@components/Tab';

export type RestaurantTabProps = Pick<TabProps, 'isActive'> & {
  className?: string;
  restaurantId: string;
  onClick: (value: string | undefined) => void;
};

export const RestaurantTab: FC<RestaurantTabProps> = ({ restaurantId, onClick, ...props }) => {
  const restaurant = useAppSelector(store => selectRestaurantById(store, restaurantId));

  return (
    <Tab label={restaurant.name} onClick={() => onClick(restaurant.id)} {...props} />
  );
};
