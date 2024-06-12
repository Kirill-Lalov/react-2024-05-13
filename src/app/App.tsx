import { FC } from 'react';

import { Layout } from '@components/Layout';
import { Restaurants } from '@components/Restaurants';

import './style.css';

export const App: FC = () => {
  return (
    <Layout>
      <Restaurants />
    </Layout>
  );
};
