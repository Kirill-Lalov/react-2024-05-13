import { FC } from 'react';

import { ThemeProvider } from '@providers/ThemeProvider';
import { UserProvider } from '@providers/UserProvider';

import { Layout } from '@components/Layout';
import { Restaurants } from '@components/Restaurants';

import './style.css';
import { restaurants } from '../../materials/mock';

export const App: FC = () => {
  if (restaurants.length === 0) {
    return <h1>Ресторанов пока нет!</h1>;
  }

  return (
    <ThemeProvider>
      <UserProvider>
        <Layout>
          <Restaurants restaurants={restaurants} />
        </Layout>
      </UserProvider>
    </ThemeProvider>
  );
};
