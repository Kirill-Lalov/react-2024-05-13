import { FC, useState } from 'react';

export type CounterProps = {
  /**
   * Минимально значение счетчика
   */
  min?: number;
  /**
   * Максимальное значение счетчика
   */
  max?: number;
};

export const Counter: FC<CounterProps> = ({ min = 0, max = 5, ...props }) => {
  const [count, setCount] = useState(0);

  function increment() {
    if (count < max) {
      setCount(count => ++count);
    }
  }

  function decrement() {
    if (count > min) {
      setCount(count => --count);
    }
  }

  return (
    <div {...props}>
      <button disabled={count <= min} onClick={decrement}>-</button>
      {count}
      <button disabled={count >= max} onClick={increment}>+</button>
    </div>
  );
};
