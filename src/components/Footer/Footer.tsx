import { FC } from 'react';
import classNames from 'classnames';

import styles from './Footer.module.css';

export type FooterProps = {
  className?: string;
};

export const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={classNames(styles.root, className)} {...props}>
      <h1>Footer</h1>
    </footer>
  );
};
