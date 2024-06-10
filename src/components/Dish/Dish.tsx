import { FC } from 'react';

import { useAppSelector } from '@redux/store';
import { selectDishById } from '@redux/entities/dishes/selectors';

import { Counter } from '@components/Counter';

import { useCount } from '@hooks/useCount';

export type DishProps = {
  dishId: string;
};

const INITIAL_VALUE = 0;
const MIN = 0;
const MAX = 5;

export const Dish: FC<DishProps> = ({ dishId, ...props }) => {
  const dish = useAppSelector((store) => selectDishById(store, dishId));
  const { count, increment, decrement } = useCount({ initialValue: INITIAL_VALUE, min: MIN, max: MAX });

  if (!dish) {
    return null;
  }

  return (
    <div {...props}>
      <span>{dish.name}</span>
      <Counter count={count} min={MIN} max={MAX} increment={increment} decrement={decrement} />
      <span>Цена: {count * dish.price}</span>
    </div>
  );
};
