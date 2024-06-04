import { FC } from 'react';

import { ThemeSwitcher } from '@components/ThemeSwitcher';
import { UserPanel } from '@components/UserPanel';

export const Header: FC = () => {
  return (
    <header>
      <h1>Header</h1>
      <ThemeSwitcher />
      <UserPanel />
      <hr />
    </header>
  );
};
