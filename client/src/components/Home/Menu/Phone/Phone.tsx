import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../../public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import NavItem from "../Phone/NavItem";

import { menuStatus } from "@/redux/actions/menuRedux";
import { useDispatch, useSelector } from "react-redux";

import NavIcons from "./NavIcons";

const Phone: React.FC = () => {
  
  const dispatch = useDispatch()
  const isOpen:any = useSelector((state:any)=>state.menuRedux.isOpen);

  return (
    <>
      <div
        className={
          isOpen == true
            ? `absolute z-[20] w-100 min-h-screen bg-[#4e4e4e79] opacity-[0.75px] block`
            : `hidden z-[0] `
        }
      ></div>

      <div
        style={{ direction: "rtl" }}
        className={
          "w-100 h-50 bg-[#ffffff] md:hidden sm:flex flex flex-wrap justify-center items-center"
        }
      >
        <div
          className={
            "w-96 bg-rmv flex flex-wrap justify-center items-center h-full"
          }
        >
          <div
            className={"w-1/2 h-full flex  justify-sart items-center"}
          >
            <FontAwesomeIcon
              onClick={() =>dispatch(menuStatus({}))}
              icon={faBars}
              className={`text-[25px] text-[#772828]`}
            />
          </div>

          <div className={"w-1/2 h-full flex bg-rmv justify-end items-center"}>
            <Image src={logo} height={100} width={100} alt="" />
          </div>
        </div>
      </div>

      <NavItem />
      <NavIcons />
    </>
  );
};

export default Phone;
