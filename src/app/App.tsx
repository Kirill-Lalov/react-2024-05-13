import { FC } from 'react';
import { Provider } from 'react-redux';

import { store } from '@redux/store';

import { ThemeProvider } from '@providers/ThemeProvider';
import { UserProvider } from '@providers/UserProvider';

import { Layout } from '@components/Layout';
import { Restaurants } from '@components/Restaurants';

import './style.css';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          <Layout>
            <Restaurants />
          </Layout>
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
};
