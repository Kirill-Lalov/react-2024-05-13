import { FC, MouseEvent, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export type ModalProps = {
  onClose: () => void;
  children?: ReactNode;
  key?: string | null;
};

export const Modal: FC<ModalProps> = ({ children, key, onClose, ...props }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    modalRef.current?.showModal();
  }, []);

  function handleCancel(event: React.SyntheticEvent<HTMLDialogElement, Event>) {
    event.preventDefault();
    onClose();
  }

  function handleClick(event: MouseEvent<HTMLDialogElement, globalThis.MouseEvent>) {
    if (event.target === modalRef.current) {
      onClose();
    }
  }

  return createPortal(
    <dialog
      ref={modalRef}
      onCancel={handleCancel}
      onClick={handleClick}
      {...props}
    >
      {children}
    </dialog>,
    document.getElementById('modal') as HTMLDivElement,
    key
  );
};
