import { FC } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { useGetMenuByRestaurantIdQuery } from '@redux/service/api/api';

import { paths } from '@router/paths';

import styles from './MenuTab.module.css';

export type RestaurantTabProps = {
  restaurantId: string;
  dishId: string;
  className?: string;
};

export const MenuTab: FC<RestaurantTabProps> = ({ dishId, restaurantId, ...props }) => {
  const { data: dish } = useGetMenuByRestaurantIdQuery(restaurantId, {
    skip: !dishId,
    selectFromResult: (store) => ({ ...store, data: store.data?.find(({ id }) => id === dishId) }),
  });

  return (
    <NavLink
      className={({ isActive }) => classNames(isActive && styles.isActive, classNames)}
      to={`${paths.restaurants}/${dish?.id}`}
      {...props}
    >
      {dish?.name}
    </NavLink>
  );
};
