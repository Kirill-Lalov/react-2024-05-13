import { FC } from 'react';

import { Review } from '@components/Review';
import { useGetReviewsByRestaurantIdQuery } from '@redux/service/api/api';
import { Preloader } from '@components/Preloader';

export type ReviewsProps = {
  restaurantId: string;
};

export const Reviews: FC<ReviewsProps> = ({ restaurantId, ...props }) => {
  const { data: reviews, isLoading } = useGetReviewsByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div {...props}>
      <h3>Отзывы</h3>
      <ul>
        {reviews?.map(review => (
          <li>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};
