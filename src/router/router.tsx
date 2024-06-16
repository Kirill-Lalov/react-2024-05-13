import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@pages/Layout';
import { HomePage } from '@pages/Home';
import { RestaurantsPage } from '@pages/Restaurants';

import { paths } from './paths';
import { Restaurant } from '@components/Restaurant';

export const router = createBrowserRouter([
  {
    path: paths.home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: paths.restaurants,
        element: <RestaurantsPage />,
        children: [
          {
            path: ':restaurantId',
            element: <Restaurant />,
          },
        ],
      },
    ],
  },
]);
