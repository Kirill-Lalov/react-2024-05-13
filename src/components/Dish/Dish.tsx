import { FC } from 'react';

import { Counter } from '@components/Counter';
import { DishType } from './types/Dish';

export type DishProps = {
  dish: DishType;
};

export const Dish: FC<DishProps> = ({ dish, ...props }) => {
  return (
    <div {...props}>
      <span>{dish.name}</span>
      <Counter />
    </div>
  );
};
