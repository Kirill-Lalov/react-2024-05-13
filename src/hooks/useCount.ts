import { useState, useCallback } from 'react';

export type UseCountParams = {
  initialValue: number;
  min: number;
  max: number;
};

export function useCount({ initialValue, min, max }: UseCountParams) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(count => count === max ? max : count + 1);
  }, [max]);

  const decrement = useCallback(() => {
    setCount(count => count === min ? count : count - 1);
  }, [min]);

  return { count, increment, decrement };
}
