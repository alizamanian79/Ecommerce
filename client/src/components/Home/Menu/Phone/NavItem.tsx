import React, { useState, FC } from "react";
import Image from "next/image";
import logo from "../../../../../public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import navStaticData from "../navStaticData";

import { useDispatch, useSelector } from "react-redux";
import { menuStatus } from "@/redux/actions/menuRedux";

interface Dt {
  data: { title: string; link: string }[];
}


const Nav: React.FC = () => {
  const dispatch = useDispatch()
  const isOpen:any = useSelector((state:any)=>state.menuRedux.isOpen)
  
  const [data, setdData] = useState<Dt["data"]>(navStaticData.data);


  const handleMenu = ()=>{
    dispatch(menuStatus({}))
  }
  

  return (
    <>
   
      <div
        className={
          isOpen == true
            ? `absolute z-[0] bg-[white] right-0 top-[10px] min-h-screen
            w-50  transition-all ease-out delay-75 `
            : `absolute z-[-1] bg-[white] right-0 top-[10px] min-h-screen
            w-0  transition-all ease-out delay-300 `
        }
      >
        <div
          className={
            isOpen == true
              ? `w-100 px-5 h-[13%] border-b-[0.75px] border-[#a7a6a66b] flex 
   justify-between items-center bg-rmv opacity-1 transition-all ease-out delay-75 translate-x-0`
              : `w-100 px-4 h-[13%]  border-b-[0.75px] border-[#a7a6a66b] flex
  justify-between items-center bg-rmv opacity-0 transition-all ease-out delay-75 translate-x-[-8px]`
          }
        >
          <div>
          
            <FontAwesomeIcon
              onClick={handleMenu}
              icon={faClose}
              className={`text-[25px] text-[black]`}
            />
          </div>
          <div>
         
            <Image src={logo} height={100} width={100} alt="" />
          </div>
        </div>

        <div
          className={
            isOpen == true
              ? ` flex w-100  h-[80%] opacity-1 transition-all ease-out delay-75 translate-y-0`
              : `flex w-100  h-[80%] opacity-0 transition-all ease-out delay-75 translate-y-[10px]`
          }
        >
          <ul className={"mt-[1.3rem] flex w-100 items-center px-5  flex-col"}>
            {data.map((item, key) => (
              <li
                className={
                  "mt-[1rem] font-[yekanBakht] bg-rmv w-90 h-35 flex items-center rounded-[3px]"
                }
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </>
  );
};

export default Nav;
