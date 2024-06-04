import { forwardRef, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Button.module.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'contained' | 'outlined' | 'text';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'contained',
  className,
  children,
  ...props
}, ref) => {
  return (
    <button
      className={classNames(styles.root, styles[variant], className)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});
