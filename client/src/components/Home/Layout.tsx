import React, { FC, useState } from "react";
import Menu from "@/components/GlobalComponents/Menu/Menu";
import Slider from "./Slider/Slider";
import { useSelector } from "react-redux";
import NavIcons from "@/components/GlobalComponents/Menu/Phone/NavIcons";
import LineTitle from "@/components/GlobalComponents/LineTitle/LineTitle";
import ProductCard from "./ProductCard/ProductCard";
import RecentlyProduct from "./RecentlyProduct/RecentlyProduct";
import SeasonCollection from "./SeasonCollection/SeasonCollection";
import SendEmail from "@/components/GlobalComponents/SendEmail/SendEmail";
import Footer from "@/components/GlobalComponents/Footer/Footer";
import BlackScreen from "../GlobalComponents/BlackScreen/BlackScreen";


const Layout = () => {
  const statusBlackScreen = useSelector<any>(
    (state) => state.blackScreen.stScreen
  );

  return (
    <>
      
      <BlackScreen />
      <div
        className={
          statusBlackScreen != true
            ? `relative w-100 h-[auto] flex bg-hBack flex-col blur-[0] items-center`
            : `blur-[1px]`
        }
        style={{ direction: "rtl" }}
      >
        <Menu />
        <Slider />

        <div className={"w-94 h-auto flex items-center flex-col"}>
          <LineTitle tprops={null} sprops={null} dprops={null} />
          <ProductCard />

          <LineTitle
            tprops={"ویژگی های"}
            sprops={"محصول"}
            dprops={"محصولات شگفت انگیز اخیراً در کاتالوگ ما اضافه شده است"}
          />
          <RecentlyProduct />

          <LineTitle
            tprops={"محصولات"}
            sprops={"زمستانی"}
            dprops={"محصولات شگفت انگیز اخیراً در کاتالوگ ما اضافه شده است"}
          />
          <SeasonCollection />

          <SendEmail />
        </div>
        <Footer />
        <NavIcons />
      </div>
    </>
  );
};

export default Layout;
