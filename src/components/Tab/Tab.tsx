import { FC } from 'react';

export type TabProps = {
  className?: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export const Tab: FC<TabProps> = ({ label, isActive, onClick, ...props }) => {
  return <button disabled={isActive} onClick={onClick} {...props}>{label}</button>;
};
