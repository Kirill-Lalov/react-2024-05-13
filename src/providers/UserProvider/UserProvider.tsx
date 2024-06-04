import { FC, ReactNode, useReducer } from 'react';

import { UserContext } from './UserContext';
import { UserType, ActionType } from './types';

export type UserProviderProps = {
  children: ReactNode;
};

function reducer(state: UserType, action: ActionType) {
  switch (action.type) {
    case 'setUsername':
      return { ...state, username: action.payload };
    case 'resetUsername':
      return { ...state, username: '' };
    case 'login':
      return { ...state, isLogin: true };
    case 'logout':
      return INITIAL_STATE;
    default:
      return state;
  }
}

const INITIAL_STATE: UserType = {
  isLogin: false,
  username: '',
};

export const UserProvider: FC<UserProviderProps> = ({ children, ...props }) => {
  const [user, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <UserContext.Provider
      value={{
        user,
        login: () => dispatch({ type: 'login' }),
        logout: () => dispatch({ type: 'logout' }),
        resetUsername: () => dispatch({ type: 'resetUsername' }),
        onChangeUsername: (value: string) => dispatch({ type: 'setUsername', payload: value }),
      }}
      {...props}
    >
      {children}
    </UserContext.Provider>
  );
};
