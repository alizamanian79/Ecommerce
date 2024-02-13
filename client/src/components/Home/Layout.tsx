import React, { FC, useState } from "react";
import Menu from "./Menu/Menu";
import Search from "./Search/Search";
import Slider from "./Slider/Slider";
import { useSelector,useDispatch } from "react-redux";
import { isSearch } from "@/redux/actions/searchRedux";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
 
  const dispatch = useDispatch();
  const status: any = useSelector(
    (state: any) => state.searchRedux.searchStatus
  );
  return (
    <>
      <Search /> 
      <div
      
        className={
          status == false
            ? `w-100 max-h-[100%] flex bg-hBack flex-col items-center relative blur-[0]`
            : `blur-[1px]`
        }
        style={{ direction: "rtl" }}
      >
         
        <Menu />
        <Slider />

        <div className="w-94 min-sm:w-95 min-h-screen flex bg-red flex-col items-center relative">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
