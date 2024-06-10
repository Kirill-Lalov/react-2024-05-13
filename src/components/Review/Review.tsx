import { FC } from 'react';

import { useAppSelector } from '@redux/store';
import { selectReviewById } from '@redux/entities/reviews/selectors';

export type ReviewProps = {
  reviewId: string;
};

export const Review: FC<ReviewProps> = ({ reviewId, ...props }) => {
  const review = useAppSelector(store => selectReviewById(store, reviewId));

  if (!review) {
    return null;
  }

  return (
    <div {...props}>
      <span>{review.text}</span>
      <hr />
    </div>
  );
};
