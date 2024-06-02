import { FC } from 'react';

import { Button } from '@components/Button';

export type RatingProps = {
  size?: number;
  rating: number;
  onChange: (rating: number) => void;
};

export const Rating: FC<RatingProps> = ({ size = 5, rating, onChange, ...props }) => {
  return (
    <div {...props}>
      {[...new Array(size)].map((_, index) => {
        const value = index + 1;

        return (
          <Button type='button' disabled={rating === value} onClick={() => onChange(value)}>
            {value}
          </Button>
        );
      })}
    </div>
  );
};
