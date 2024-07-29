import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../../public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import NavItem from "../Phone/NavItem";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeMenuStatus } from "@/redux/actions/menuRedux";

const Phone: React.FC = () => {
  const dispatch = useDispatch();
  let menuStatus: any = useSelector<any>((state) => state.menuRedux.menu);

  const handleClick = () => {
    dispatch(handleChangeMenuStatus(menuStatus));
  };

  return (
    <>
      <div
        style={{ direction: "rtl" }}
        className={`w-100 max-sm:h-[55px] bg-[white] md:hidden sm:flex flex
           flex-wrap justify-center items-center
          sticky top-0 z-[10]`}
      >
        <NavItem />

        <div
          className={"w-96 bg-rmv flex flex-wrap justify-center items-center "}
        >
          <div className={"w-1/2 h-auto  flex  justify-sart items-center"}>
            <FontAwesomeIcon
              onClick={handleClick}
              icon={faBars}
              className={`text-[25px] text-[#202020]`}
            />
          </div>

          <div className={"w-1/2 h-full flex bg-rmv justify-end items-center"}>
            <Image src={logo} height={100} width={100} alt="" />
          </div>
        </div>


        
      </div>
    </>
  );
};

export default Phone;
