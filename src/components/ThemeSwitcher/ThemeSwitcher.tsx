import { FC } from 'react';

import { Button } from '@components/Button';

import { useTheme } from '@hooks/useTheme';

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return <Button variant='outlined' onClick={toggleTheme}>{theme}</Button>;
};
