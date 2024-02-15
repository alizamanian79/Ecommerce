import React, { FC, useState } from "react";
import Menu from "./Menu/Menu";
import Slider from "./Slider/Slider";
import { useSelector } from "react-redux";

const Layout = () => {
  const blackScreen: any = useSelector((state: any) => state.menuRedux.isOpen);

  console.log(blackScreen);

  return (
    <>
      <div className={`relative w-100 min-h-screen flex bg-hBack flex-col blur-[0]`}>

       
        <div
          className={
           
               ` `
          
          }
          style={{ direction: "rtl" }}
        >
          <Menu />
          <Slider />
          <Slider />
          <Slider />
          <Slider />
          <Slider />


          <div className="w-94 min-sm:w-95  flex bg-red flex-col items-center relative"></div>
        </div>





      </div>
    </>
  );
};

export default Layout;
