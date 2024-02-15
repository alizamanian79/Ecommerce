import React from "react";
import logo from "../../../../../public/logo.png";
import Image from "next/image";
export default function Logo() {
  return (
    <div
      className={`w-1/5 h-[100%] bg-rmv flex justify-start items-center`}
    >
      <Image src={logo} width={130} height={130} alt="" />
    </div>
  );
}
