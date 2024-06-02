import { FC, ReactNode, useRef } from 'react';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { ScrollProgress } from '@components/ScrollProgress';

export type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ maxHeight: '100dvh', overflow: 'auto' }} ref={parentRef} {...props}>
      <ScrollProgress parentRef={parentRef} />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <div id='modal' style={{ zIndex: 2 }} />
    </div>
  );
};
