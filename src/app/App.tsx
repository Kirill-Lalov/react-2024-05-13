import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from '@router/router';

import './style.css';

export const App: FC = () => {
  return (
    <RouterProvider router={router} />
  );
};
