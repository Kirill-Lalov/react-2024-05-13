import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@redux/store';
import { getReviewsByRestaurantId } from '@redux/entities/reviews/thunks/getReviewsByRestaurantId';

import { Review } from '@components/Review';
import { selectRestaurantReviewIds } from '@redux/entities/restaurants/selectors';

export type ReviewsProps = {
  restaurantId: string;
};

export const Reviews: FC<ReviewsProps> = ({ restaurantId, ...props }) => {
  const reviewIds = useAppSelector((store) => selectRestaurantReviewIds(store, restaurantId));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getReviewsByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  if (!reviewIds) {
    return null;
  }

  return (
    <div {...props}>
      <h3>Отзывы</h3>
      <ul>
        {reviewIds?.map(reviewId => (
          <li>
            <Review reviewId={reviewId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
