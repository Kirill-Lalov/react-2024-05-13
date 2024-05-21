import { FC } from 'react';

import { Review, ReviewType } from '@components/Review';

export type ReviewsProps = {
  reviews: ReviewType[];
};

export const Reviews: FC<ReviewsProps> = ({ reviews, ...props }) => {
  return (
    <div {...props}>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map(review => (
          <li>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
