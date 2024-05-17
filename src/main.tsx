import React from 'react';
import ReactDOM from 'react-dom/client';

import { Layout } from '@components/Layout';
import { Restaurants } from '@components/Restaurants';
import { restaurants } from '../materials/mock';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout
      renderHeader={() => <h2>Header</h2>}
      renderMain={() => <Restaurants restaurants={restaurants} />}
      renderFooter={() => <h2>Footer</h2>}
    />
  </React.StrictMode>
);
