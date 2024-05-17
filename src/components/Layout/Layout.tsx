import { FC, ReactNode } from 'react';

export type LayoutProps = {
  renderHeader?: () => ReactNode;
  renderLeftSidebar?: () => ReactNode;
  renderMain?: () => ReactNode;
  renderRightSidebar?: () => ReactNode;
  renderFooter?: () => ReactNode;
};

export const Layout: FC<LayoutProps> = (props) => {
  const {
    renderHeader,
    renderLeftSidebar,
    renderMain,
    renderRightSidebar,
    renderFooter,
  } = props;

  return (
    <div>
      {renderHeader && <header>{renderHeader()}</header>}
      <div>
        {renderLeftSidebar && <aside>{renderLeftSidebar()}</aside>}
        {renderMain && <main>{renderMain()}</main>}
        {renderRightSidebar && <aside>{renderRightSidebar()}</aside>}
      </div>
      {renderFooter && <footer>{renderFooter()}</footer>}
    </div>
  );
};
