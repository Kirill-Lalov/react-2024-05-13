import { FC } from 'react';

import { useGetMenuByRestaurantIdQuery } from '@redux/service/api/api';

import { Dish } from '@components/Dish';
import { Preloader } from '@components/Preloader';

export type MenuProps = {
  restaurantId: string;
};

export const Menu: FC<MenuProps> = ({ restaurantId, ...props }) => {
  const { data: menu, isLoading } = useGetMenuByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div {...props}>
      <h3>Меню</h3>
      <ul>
        {menu?.map(dish =>
          <li>
            <Dish dish={dish} />
          </li>
        )}
      </ul>
    </div>
  );
};
