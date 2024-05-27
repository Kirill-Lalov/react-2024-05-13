import { FC } from 'react';

import { Counter } from '@components/Counter';
import { useCount } from '@hooks/useCount';
import { DishType } from './types/Dish';

export type DishProps = {
  dish: DishType;
};

const INITIAL_VALUE = 0;
const MIN = 0;
const MAX = 5;

export const Dish: FC<DishProps> = ({ dish, ...props }) => {
  const { count, increment, decrement } = useCount({ initialValue: INITIAL_VALUE, min: MIN, max: MAX });

  return (
    <div {...props}>
      <span>{dish.name}</span>
      <Counter count={count} min={MIN} max={MAX} increment={increment} decrement={decrement} />
      <span>Цена: {count * dish.price}</span>
    </div>
  );
};
