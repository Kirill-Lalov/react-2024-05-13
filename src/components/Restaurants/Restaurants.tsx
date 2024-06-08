import { FC, useState } from 'react';

import { Restaurant } from '@components/Restaurant';
import { RestaurantTabs } from '@components/RestaurantTabs';

export const Restaurants: FC = (props) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string>();

  return (
    <div {...props}>
      <RestaurantTabs selectedRestaurantId={selectedRestaurantId} onClick={setSelectedRestaurantId} />
      {selectedRestaurantId !== undefined && <Restaurant restaurantId={selectedRestaurantId} />}
    </div>
  );
};
