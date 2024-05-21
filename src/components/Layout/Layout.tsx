import { FC, ReactNode } from 'react';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

export type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <div {...props}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};
