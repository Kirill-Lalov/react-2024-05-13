import { FC, FormEvent } from 'react';

import { Button } from '@components/Button';
import { Modal } from '@components/Modal';

import { useUser } from '@hooks/useUser';

export type LoginModalProps = {
  onClose: () => void;
};

export const LoginModal: FC<LoginModalProps> = ({ onClose, ...props }) => {
  const { user: { username }, login, resetUsername, onChangeUsername } = useUser();

  function handleClose() {
    resetUsername();
    onClose();
  }

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login();
    onClose();
  }

  return (
    <Modal onClose={handleClose} {...props} >
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Имя пользователя:
            <input required type='text' value={username} onChange={(event) => onChangeUsername(event.target.value)} />
          </label>
        </div>
        <div>
          <Button type='submit'>Войти</Button>
          <Button type='button' onClick={handleClose}>Отмена</Button>
        </div>
      </form>
    </Modal>
  );
};
