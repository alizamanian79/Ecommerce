
import React,{useState,FC} from "react"
import Image from "next/image";
import logo from "../../../../../public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import navStaticData from "../navStaticData";
import { useDispatch, useSelector } from "react-redux";

interface Dt {
    data: { title: string; link: string }[];
  }

  interface navIF {
    hamburger:boolean
  }


const Nav :React.FC <navIF> = ({hamburger}) =>{


    const [hamburgerMenu, setHamburgerMenu] = useState(hamburger);
    const [data, setdData] = useState<Dt["data"]>(navStaticData.data);

    return(
        <>


<div
        className={
          hamburgerMenu == true
            ? `absolute z-11 w-100 min-h-screen bg-[#27272758] opacity-[0.75px] block`
            : `hidden z-0 `
        }
      ></div>
      

         <div
        className={
          hamburgerMenu == true
            ? `absolute right-0 z-20 w-62 h-full bg-[white] transition-all ease-out delay-100 `
            : `absolute right-0 z-0 w-0 h-full bg-[white] transition-all ease-out delay-100`
        }
      >
        <div
          className={
            hamburgerMenu == true
              ? `w-100 px-5 h-[13%] border-b-[0.75px] border-[#a7a6a66b] flex 
   justify-between items-center bg-[white] opacity-1 transition-all ease-out delay-75 translate-x-0`
              : `w-100 px-4 h-[13%] border-b-[0.75px] border-[#a7a6a66b] flex
  justify-between items-center bg-[white] opacity-0 transition-all ease-out delay-75 translate-x-[-8px]`
          }
        >
          <div>
            {" "}
            <FontAwesomeIcon
              onClick={() => setHamburgerMenu(!hamburgerMenu)}
              icon={faClose}
              className={`text-[25px] text-[black]`}
            />
          </div>
          <div>
            {" "}
            <Image src={logo} height={100} width={100} alt="" />
          </div>
        </div>

        <div
          className={
            hamburgerMenu == true
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
    )
}

export default Nav
