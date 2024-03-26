import React, { useState, FC } from "react";
import Image from "next/image";
import logo from "../../../../../public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import navStaticData from "../navStaticData";


import { useDispatch, useSelector } from "react-redux";
import { handleChangeMenuStatus,handleChosen } from "@/redux/actions/menuRedux";


interface Dt {
  data: { title: string; link: string }[];
  isOpen: boolean;
}

const Nav: React.FC = () => {
  const [data, setdData] = useState<Dt["data"]>(navStaticData.data);
  const dispatch = useDispatch();
  let isOpen: any = useSelector<any>((state) => state.menuRedux.menu);
  let chosen = useSelector<any>(state=>state.menuRedux.chosen)
 
  //handleMenu Click
  const handleMenu = ():void => {
    dispatch(handleChangeMenuStatus());
  };


  //handle li Click
  const handleliClick = (item:string)=>{
    dispatch(handleChosen({ chosen: item }));

  }

  return (
    <>
      {isOpen && (
        <div
          className={`absolute  top-[0] z-[19] w-100 h-screen flex bg-[#2b2b2b6e] blur-[1px]`}
        ></div>
      )}

      <div
        className={
          isOpen == true
            ? `absolute top-0 right-0 z-20 w-62
             max-sm:h-screen bg-[#ffffff] transition-all ease-out delay-100 `
            : `absolute top-0 right-0 z-[-10] w-0 max-sm:h-[100vh] bg-[white]
             transition-all ease-out delay-100`
        }
      >
        <div
          className={
            isOpen == true
              ? `w-100 px-5 h-[13%] border-b-[0.75px] border-[#a7a6a66b] flex  z-[10]
   justify-between items-center bg-[#ffffff] transition-all ease-out delay-75 translate-x-0`
              : `w-0`
          }
        >
          <FontAwesomeIcon
            onClick={handleMenu}
            icon={faClose}
            className={
              isOpen == true
                ? `text-[25px] text-[#1c1c1c] opacity-1`
                : `opacity-0 z-[-1] absolute top-[11px] right-[8px] text-[30px] text-[#2b2b2b]`
            }
          />

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
          <ul
            className={
              isOpen == true
                ? "mt-[1.3rem] flex w-100 items-center px-5  flex-col"
                : "mt-[1.3rem] flex w-0 items-center px-0  flex-col"
            }
          >
            {data.map((item, index) => (
              <li
              onClick={()=>handleliClick(item.title)}
                key={index}
                className={
                  chosen == item.title ? 
                  "mt-[1rem] text-[#282828] font-[yekanBakhtBold] bg-rmv w-90 h-35 flex items-center rounded-[3px]"
                  :
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
