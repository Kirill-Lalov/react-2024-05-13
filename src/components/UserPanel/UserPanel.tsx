import { FC } from 'react';

import { useUser } from '@hooks/useUser';
import { Button } from '@components/Button';

export type UserPanelProps = {
  onLogout: () => void;
  onLogin: () => void;
};

export const UserPanel: FC<UserPanelProps> = ({ onLogin, onLogout, ...props }) => {
  const { user } = useUser();

  return (
    <div {...props}>
      {user.isLogin ? (
        <div>
          <h4>{user.username}</h4>
          <Button onClick={onLogout}>Выйти</Button>
        </div>
      ) : (
        <Button onClick={onLogin}>Войти</Button>
      )}
    </div>
  );
};
