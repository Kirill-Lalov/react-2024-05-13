import { FC, useCallback, useState } from 'react';

import { useUser } from '@hooks/useUser';
import { Button } from '@components/Button';
import { LoginModal } from '@components/LoginModal';

export const UserPanel: FC = (props) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { user, logout } = useUser();

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true);
  }

  const handleCloseLoginModal = useCallback(() => {
    setIsLoginModalOpen(false);
  }, []);

  return (
    <div {...props}>
      {user.isLogin ? (
        <div>
          <h4>{user.username}</h4>
          <Button onClick={logout}>Выйти</Button>
        </div>
      ) : (
        <Button onClick={handleOpenLoginModal}>Войти</Button>
      )}

      {isLoginModalOpen && <LoginModal onClose={handleCloseLoginModal} />}
    </div>
  );
};
