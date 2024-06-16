import { FC } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { useGetRestaurantsQuery } from '@redux/service/api/api';

import { paths } from '@router/paths';

import styles from './RestaurantTab.module.css';

export type RestaurantTabProps = {
  restaurantId: string;
  className?: string;
};

export const RestaurantTab: FC<RestaurantTabProps> = ({ restaurantId, ...props }) => {
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    skip: !restaurantId,
    selectFromResult: (store) => ({ ...store, data: store.data?.find(({ id }) => id === restaurantId) }),
  });

  return (
    <NavLink
      className={({ isActive }) => classNames(isActive && styles.isActive, classNames)}
      to={`${paths.restaurants}/${restaurant?.id}`}
      {...props}
    >
      {restaurant?.name}
    </NavLink>
  );
};
