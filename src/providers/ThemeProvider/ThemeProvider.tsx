import { FC, useState, ReactNode, useCallback, useMemo } from 'react';

import { ThemeContext, ThemeType } from './ThemeContext';

export type ThemeProviderProps = {
  children: ReactNode;
}

const LOCAL_STORAGE_THEME_KEY = 'theme';
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType ?? 'dark';

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, ...props }) => {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  const toggleTheme = useCallback(() => {
    setTheme(currentTheme => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
      return newTheme;
    });
  }, []);

  const themeContextValue = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={themeContextValue} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
