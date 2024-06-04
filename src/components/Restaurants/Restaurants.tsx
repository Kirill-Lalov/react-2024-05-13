import { FC, useState } from 'react';

import { useAppSelector } from '@redux/store';

import { Tabs, EntryType } from '@components/Tabs';
import { Restaurant } from '@components/Restaurant';

export const Restaurants: FC = (props) => {
  const { entities: restaurants, ids: restaurantIds } = useAppSelector(store => store.restaurants);
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(restaurantIds[0]);

  const entries: EntryType<string>[] = Object.values(restaurants).map(restaurant => (
    { label: restaurant.name, value: restaurant.id })
  );

  return (
    <div {...props}>
      <Tabs entries={entries} onChange={setSelectedRestaurantId} />
      <Restaurant restaurantId={selectedRestaurantId} />
    </div>
  );
};
