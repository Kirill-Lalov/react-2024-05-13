import { FC, useState } from 'react';

import { Tabs, EntryType } from '@components/Tabs';
import { Restaurant, RestaurantType } from '@components/Restaurant';

export type RestaurantsProps = {
  restaurants: RestaurantType[];
};

export const Restaurants: FC<RestaurantsProps> = ({ restaurants, ...props }) => {
  const [selectedRestaurantIndex, setSelectedRestaurantIndex] = useState(0);

  const entries: EntryType<number>[] = restaurants.map((restaurant, index) => (
    { label: restaurant.name, value: index })
  );

  return (
    <div {...props}>
      <Tabs entries={entries} onChange={setSelectedRestaurantIndex} />
      <Restaurant restaurant={restaurants[selectedRestaurantIndex]} />
      <Restaurant restaurant={restaurants[selectedRestaurantIndex]} />
      <Restaurant restaurant={restaurants[selectedRestaurantIndex]} />
      <Restaurant restaurant={restaurants[selectedRestaurantIndex]} />
      <Restaurant restaurant={restaurants[selectedRestaurantIndex]} />
      <Restaurant restaurant={restaurants[selectedRestaurantIndex]} />
      <Restaurant restaurant={restaurants[selectedRestaurantIndex]} />
      <Restaurant restaurant={restaurants[selectedRestaurantIndex]} />
      <Restaurant restaurant={restaurants[selectedRestaurantIndex]} />
      <Restaurant restaurant={restaurants[selectedRestaurantIndex]} />
      <Restaurant restaurant={restaurants[selectedRestaurantIndex]} />
      <Restaurant restaurant={restaurants[selectedRestaurantIndex]} />
      <Restaurant restaurant={restaurants[selectedRestaurantIndex]} />
    </div>
  );
};
