import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from '@app/App';

import { ThemeProvider } from '@providers/ThemeProvider';
import { UserProvider } from '@providers/UserProvider';

import { store } from '@redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
