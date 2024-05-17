import { FC } from 'react';

import { Dish, DishType } from '@components/Dish';

export type MenuProps = {
  menu: DishType[];
};

export const Menu: FC<MenuProps> = ({ menu, ...props }) => {
  return (
    <div {...props}>
      <h3>Меню</h3>
      <ul>
        {menu.map(dish =>
          <li>
            <Dish dish={dish} />
          </li>
        )}
      </ul>
    </div>
  );
};
