import { FC } from 'react';

import { Layout } from '@components/Layout';
import { Restaurants } from '@components/Restaurants';
import { restaurants } from '../../materials/mock';

export const App: FC = () => {
  return (
    <Layout>
      <Restaurants restaurants={restaurants} />
    </Layout>
  );
};
