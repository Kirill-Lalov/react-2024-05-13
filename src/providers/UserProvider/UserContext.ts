import { createContext } from 'react';

import { UserType } from './types';

export type UserContextType = {
  user: UserType
  login: () => void;
  logout: () => void;
  resetUsername: () => void;
  onChangeUsername: (value: string) => void;
};

export const UserContext = createContext<UserContextType>({
  user: {
    isLogin: false,
    username: '',
  },
  login: () => null,
  logout: () => null,
  resetUsername: () => null,
  onChangeUsername: () => null,
});
