import { FC, useCallback, useState } from 'react';

import { ThemeSwitcher } from '@components/ThemeSwitcher';
import { LoginModal } from '@components/LoginModal';
import { UserPanel } from '@components/UserPanel';

import { useUser } from '@hooks/useUser';

export const Header: FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { logout } = useUser();

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true);
  }

  const handleCloseLoginModal = useCallback(() => {
    setIsLoginModalOpen(false);
  }, []);

  return (
    <header>
      <h1>Header</h1>
      <ThemeSwitcher />
      <UserPanel onLogin={handleOpenLoginModal} onLogout={logout} />
      {isLoginModalOpen && <LoginModal onClose={handleCloseLoginModal} />}
      <hr />
    </header>
  );
};
