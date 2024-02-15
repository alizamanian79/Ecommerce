import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../../public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavItem from "../Phone/NavItem";
import { menuStatus } from "@/redux/actions/menuRedux";
import { useDispatch, useSelector } from "react-redux";


const Phone: React.FC = () => {
  
  const dispatch = useDispatch()
  const isOpen:any = useSelector((state:any)=>state.menuRedux.isOpen)
  
  const handleMenu = ()=>{
    dispatch(menuStatus({}))
  }

  return (
    <>
   

      <div
        style={{ direction: "rtl" }}
        className={
          isOpen == true ?
          ` sticky top-0 z-[10] w-100 h-50 bg-[white]
           md:hidden sm:flex flex flex-wrap justify-center items-center`
           :
           `sticky top-0 z-[10] w-100 h-50 bg-[white]
           md:hidden sm:flex flex flex-wrap justify-center items-center`
          }
      >
          <NavItem />

          

        <div
          className={
            "bg-rmv w-96 flex flex-wrap justify-center items-center h-full"
          }
        >
          <div
            className={"w-1/2 h-full flex  justify-sart items-center"}
          >
            <FontAwesomeIcon
              onClick={handleMenu}
              icon={faBars}
              className={`text-[25px] text-[black]`}
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
