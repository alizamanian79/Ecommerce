import React, { FC, useState } from "react";
import Menu from "./Menu/Menu";
import Slider from "./Slider/Slider";
import { useSelector } from "react-redux";
import NavIcons from "./Menu/Phone/NavIcons";
import LineTitle from "./LineTitle/LineTitle";
import ProductCard from "./ProductCard/ProductCard";
import RecentlyProduct from "./RecentlyProduct/RecentlyProduct";
import SeasonCollection from "./SeasonCollection/SeasonCollection";
import SendEmail from "./SendEmail/SendEmail";
import Footer from "./Footer/Footer";
const Layout = () => {

  return (
    <>
      <div
        className={`relative w-100 min-h-screen flex bg-hBack flex-col blur-[0] items-center`}
        style={{ direction: "rtl" }}
      >
        <Menu />
        <Slider />

        <div className={"w-94 h-auto flex items-center flex-col"}>
          <LineTitle tprops={null} sprops={null} dprops={null} />
          <ProductCard />

          <LineTitle tprops={'ویژگی های'} sprops={'محصول'} dprops={'محصولات شگفت انگیز اخیراً در کاتالوگ ما اضافه شده است'} />
          <RecentlyProduct />
          
          <LineTitle tprops={'محصولات'} sprops={'زمستانی'} dprops={'محصولات شگفت انگیز اخیراً در کاتالوگ ما اضافه شده است'} />
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
