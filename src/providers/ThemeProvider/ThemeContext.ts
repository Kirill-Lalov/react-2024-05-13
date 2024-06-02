import { createContext } from 'react';

export type ThemeType = 'light' | 'dark';

export type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => null,
});
