import { FC } from 'react';

import { Dish } from '@components/Dish';

export type MenuProps = {
  menuIds: string[];
};

export const Menu: FC<MenuProps> = ({ menuIds, ...props }) => {
  return (
    <div {...props}>
      <h3>Меню</h3>
      <ul>
        {menuIds.map(dishId =>
          <li>
            <Dish dishId={dishId} />
          </li>
        )}
      </ul>
    </div>
  );
};
