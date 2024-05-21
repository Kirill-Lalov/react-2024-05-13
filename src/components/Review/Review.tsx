import { FC } from 'react';

import { ReviewType } from './types/Review';

export type ReviewProps = {
  review: ReviewType;
};

export const Review: FC<ReviewProps> = ({ review, ...props }) => {
  return <span {...props}>{review.text}</span>;
};
