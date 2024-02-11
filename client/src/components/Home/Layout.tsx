import React, { FC } from "react";
import Menu from "./Menu/Menu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
    <Menu />
    <div className="w-100 h-auto flex bg-red flex-col items-center relative" style={{direction:'rtl'}}>
      <div  className="w-90 h-auto flex bg-red flex-col items-center relative" >
      {children}
      </div>
    </div>
    </>
  );
};

export default Layout;