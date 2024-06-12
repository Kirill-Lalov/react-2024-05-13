import classNames from 'classnames';
import { forwardRef } from 'react';

import { SpinnerSizesType } from './types';
import styles from './Spinner.module.css';

export type SpinnerProps = {
  size?: SpinnerSizesType;
  className?: string;
};

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(({
  size = 'medium',
  className,
  ...props
}, ref) => {
  return (
    <span className={classNames(styles.spinner, styles[size], className)} ref={ref} {...props} />
  );
});
