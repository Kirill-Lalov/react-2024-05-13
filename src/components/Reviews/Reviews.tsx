import { FC } from 'react';

import { Review } from '@components/Review';

export type ReviewsProps = {
  reviewIds: string[];
};

export const Reviews: FC<ReviewsProps> = ({ reviewIds, ...props }) => {
  return (
    <div {...props}>
      <h3>Отзывы</h3>
      <ul>
        {reviewIds.map(reviewId => (
          <li>
            <Review reviewId={reviewId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
