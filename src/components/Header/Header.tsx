import { FC } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { ThemeSwitcher } from '@components/ThemeSwitcher';
import { UserPanel } from '@components/UserPanel';

import styles from './Header.module.css';
import { paths } from '@router/paths';

export type HeaderProps = {
  className?: string;
};

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <header className={classNames(styles.root, className)} {...props}>
      <h1>Logo</h1>
      <div className={styles.actions}>
        <NavLink to={paths.home}>Главная</NavLink>
        <NavLink to={paths.restaurants}>Рестораны</NavLink>
      </div>
      <div className={styles.actions}>
        <ThemeSwitcher />
        <UserPanel />
      </div>
    </header>
  );
};
