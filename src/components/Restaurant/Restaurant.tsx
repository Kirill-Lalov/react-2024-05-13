import { FC } from 'react';

import { useGetRestaurantsQuery } from '@redux/service/api/api';

import { Reviews } from '@components/Reviews';
import { ReviewForm } from '@components/ReviewForm';
import { useParams } from 'react-router-dom';
import { Preloader } from '@components/Preloader';
import { MenuTabs } from '@components/MenuTabs/MenuTabs';

export type RestaurantProps = {
  className?: string;
}

export const Restaurant: FC<RestaurantProps> = ({ ...props }) => {
  const { restaurantId } = useParams();

  const { data: restaurant, isFetching } = useGetRestaurantsQuery(undefined, {
    skip: !restaurantId,
    selectFromResult: (store) => ({ ...store, data: store.data?.find(({ id }) => id === restaurantId) }),
  });

  if (isFetching) {
    return <Preloader />;
  }

  if (restaurant === undefined) {
    return <h1>Ресторан не найден</h1>;
  }

  return (
    <div {...props}>
      <h1>{restaurant?.name}</h1>
      {restaurant?.menu !== undefined && restaurant.menu.length !== 0 && <MenuTabs restaurantId={restaurant.id} />}
      {restaurant?.reviews !== undefined && restaurant.reviews.length !== 0 && <Reviews restaurantId={restaurant.id} />}
      {restaurant?.id !== undefined && <ReviewForm restaurantId={restaurant.id} />}
    </div>
  );
};
