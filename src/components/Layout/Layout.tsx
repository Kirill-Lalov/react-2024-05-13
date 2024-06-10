import { FC, ReactNode, useRef } from 'react';
import classNames from 'classnames';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { ScrollProgress } from '@components/ScrollProgress';
import { useTheme } from '@hooks/useTheme';

import styles from './Layout.module.css';

export type LayoutProps = {
  className?: string;
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ className, children, ...props }) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  return (
    <div className={classNames(styles.root, theme, className)} {...props}>
      <Header />
      <ScrollProgress parentRef={parentRef} />
      <main className={styles.main} ref={parentRef}>
        {children}
      </main>
      <Footer />
      <div id='modal' style={{ zIndex: 2 }} />
    </div>
  );
};
