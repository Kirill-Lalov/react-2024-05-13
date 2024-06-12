import { FC } from 'react';

import { ReviewType } from '@redux/entities/reviews/types';

import { Button } from '@components/Button';

export type ReviewProps = {
  review: ReviewType;
};

export const Review: FC<ReviewProps> = ({ review, ...props }) => {
  return (
    <div {...props}>
      <span>{review.text}</span>
      <Button>Изменить</Button>
      <hr />
    </div>
  );
};
