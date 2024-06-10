import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@redux/store';
import { getDishesByRestaurantId } from '@redux/entities/dishes/thunks/getDishesByRestaurantId';
import { selectRestaurantMenuIds } from '@redux/entities/restaurants/selectors';

import { Dish } from '@components/Dish';

export type MenuProps = {
  restaurantId: string;
};

export const Menu: FC<MenuProps> = ({ restaurantId, ...props }) => {
  const menuIds = useAppSelector((store) => selectRestaurantMenuIds(store, restaurantId));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDishesByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

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
