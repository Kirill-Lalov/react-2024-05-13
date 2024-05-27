import { FC } from 'react';

export type CounterProps = {
  count: number;
  min: number;
  max: number;
  increment: () => void;
  decrement: () => void;
};

export const Counter: FC<CounterProps> = ({ count, min, max, increment, decrement, ...props }) => {
  return (
    <div {...props}>
      <button disabled={count <= min} onClick={decrement}>-</button>
      {count}
      <button disabled={count >= max} onClick={increment}>+</button>
    </div>
  );
};
