import { FC } from 'react';
import classNames from 'classnames';

import { ThemeSwitcher } from '@components/ThemeSwitcher';
import { UserPanel } from '@components/UserPanel';

import styles from './Header.module.css';

export type HeaderProps = {
  className?: string;
};

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <header className={classNames(styles.root, className)} {...props}>
      <h1>Logo</h1>
      <div className={styles.actions}>
        <ThemeSwitcher />
        <UserPanel />
      </div>
    </header>
  );
};
