import { FC, useState } from 'react';
import classNames from 'classnames';

import { Restaurant } from '@components/Restaurant';
import { RestaurantTabs } from '@components/RestaurantTabs';

import styles from './Restaurants.module.css';

export type RestaurantsProps = {
  className?: string;
};

export const Restaurants: FC<RestaurantsProps> = ({ className, ...props }) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string>();

  return (
    <div className={classNames(styles.root, className)} {...props}>
      <RestaurantTabs selectedRestaurantId={selectedRestaurantId} onClick={setSelectedRestaurantId} />
      {selectedRestaurantId !== undefined && <Restaurant restaurantId={selectedRestaurantId} />}
    </div>
  );
};
