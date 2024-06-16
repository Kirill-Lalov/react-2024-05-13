import { FC, useRef } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { ScrollProgress } from '@components/ScrollProgress';
import { useTheme } from '@hooks/useTheme';
import classNames from 'classnames';
import styles from './Layout.module.css';

export type LayoutProps = {
  className?: string;
};

export const Layout: FC<LayoutProps> = ({ className, ...props }) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  return (
    <div className={classNames(styles.root, theme, className)} {...props}>
      <Header />
      <ScrollProgress parentRef={parentRef} />
      <main className={styles.main} ref={parentRef}>
        <Outlet />
      </main>
      <Footer />
      <div id='modal' style={{ zIndex: 2 }} />
    </div>
  );
};
