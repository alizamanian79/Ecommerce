import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../../public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import Nav from "../Phone/NavItem";
import { useDispatch, useSelector } from "react-redux";

interface Dt {
  data: { title: string; link: string }[];
}

const Phone: React.FC = () => {

  // const dispatch = useDispatch();
  // const status: any = useSelector(
  //   (state: any) => state.searchRedux.searchStatus
  // );

  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  return (
    <>
      {/* Black Screen */}
     


<Nav hamburger={hamburgerMenu} />




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
            onClick={() => setHamburgerMenu(!hamburgerMenu)}
            className={"w-1/2 h-full flex  justify-sart items-center"}
          >
            <FontAwesomeIcon
              onClick={() => setHamburgerMenu(!hamburgerMenu)}
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
