import { forwardRef, ButtonHTMLAttributes } from 'react';

import { useTheme } from '@hooks/useTheme';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { theme } = useTheme();

  return (
    <button
      style={{
        color: `${theme === 'dark' ? '#fff' : '#000'}`,
        backgroundColor: `${theme === 'dark' ? '#000' : '#fff'}`,
      }}
      ref={ref}
      {...props}
    />
  );
});
