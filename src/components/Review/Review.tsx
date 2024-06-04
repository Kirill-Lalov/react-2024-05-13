import { FC } from 'react';

import { useAppSelector } from '@redux/store';

export type ReviewProps = {
  reviewId: string;
};

export const Review: FC<ReviewProps> = ({ reviewId, ...props }) => {
  const review = useAppSelector(store => store.reviews.entities[reviewId]);

  return <span {...props}>{review.text}</span>;
};
