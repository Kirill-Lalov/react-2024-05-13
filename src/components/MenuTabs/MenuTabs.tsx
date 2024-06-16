import { FC } from 'react';

import { useGetMenuByRestaurantIdQuery } from '@redux/service/api/api';

import { Preloader } from '@components/Preloader';
import { MenuTab } from '@components/MenuTab/MenuTab';

export type MenuTabsProps = {
  restaurantId: string;
  className?: string;
};

export const MenuTabs: FC<MenuTabsProps> = ({ restaurantId, ...props }) => {
  const { data: menu, isLoading, isSuccess } = useGetMenuByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div {...props}>
      {isSuccess && menu.map(dish => (
        <MenuTab restaurantId={restaurantId} dishId={dish.id} />
      ))}
    </div>
  );
};
