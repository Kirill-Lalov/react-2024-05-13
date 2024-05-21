import { FC } from 'react';

import { Layout } from '@components/Layout';
import { Restaurants } from '@components/Restaurants';
import { restaurants } from '../../materials/mock';

export const App: FC = () => {
  if (restaurants.length === 0) {
    return <h1>Ресторанов пока нет!</h1>;
  }

  return (
    <Layout>
      <Restaurants restaurants={restaurants} />
    </Layout>
  );
};
