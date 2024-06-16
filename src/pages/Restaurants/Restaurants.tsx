import { FC } from 'react';
import classNames from 'classnames';

import styles from './Restaurants.module.css';
import { Outlet } from 'react-router-dom';
import { RestaurantTabs } from '@components/RestaurantTabs';

export type RestaurantsPageProps = {
  className?: string;
}

export const RestaurantsPage: FC<RestaurantsPageProps> = ({ className, ...props }) => {
  return (
    <div className={classNames(styles.root, className)} {...props}>
      <RestaurantTabs />
      <Outlet />
    </div>
  );
};
