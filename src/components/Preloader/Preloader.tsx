import { FC } from 'react';
import classNames from 'classnames';

import { Spinner } from '@components/Spinner';

import styles from './Preloader.module.css';

export type PreloaderProps = {
  className?: string;
};

export const Preloader: FC<PreloaderProps> = ({ className, ...props }) => {
  return (
    <div className={classNames(styles.root, className)} {...props}>
      <Spinner size='large' />
    </div>
  );
};
