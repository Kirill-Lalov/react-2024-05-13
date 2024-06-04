import { FC } from 'react';

import { Button } from '@components/Button';

import { useUser } from '@hooks/useUser';

export type CounterProps = {
  count: number;
  min: number;
  max: number;
  increment: () => void;
  decrement: () => void;
};

export const Counter: FC<CounterProps> = ({ count, min, max, increment, decrement, ...props }) => {
  const { user: { isLogin } } = useUser();

  return (
    <div {...props}>
      {isLogin && <Button disabled={count <= min} onClick={decrement}>-</Button>}
      {count}
      {isLogin && <Button disabled={count >= max} onClick={increment}>+</Button>}
    </div>
  );
};
