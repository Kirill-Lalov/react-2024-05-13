import { FC, useEffect } from 'react';

import { Layout } from '@components/Layout';
import { Restaurants } from '@components/Restaurants';

import './style.css';
import { getRestaurants } from '@redux/entities/restaurants/thunks/getRestaurants';
import { useAppDispatch } from '@redux/store';

export const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  return (
    <Layout>
      <Restaurants />
    </Layout>
  );
};
