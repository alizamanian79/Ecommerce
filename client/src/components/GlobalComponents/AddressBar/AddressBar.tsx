import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";

interface AddressBarProps {
  data: {
    title: string;
    router?: string;
  }[];
}

const AddressBar: React.FC<AddressBarProps> = ({ data }) => {
  const textColor = "#b2b1b1";
  const textColorHover = "#363636";
  const router = useRouter();

  return (
    <div
      className={`w-100 h-[45px] border-t-[0.5px] border-b-[0.5px] border-[#cecece] border-indigo-500 flex items-center justify-center`}
    >
      <ul
        className={`w-94 h-full flex items-center justify-start bg-rmv`}
        style={{ direction: "rtl" }}
      >
        <IoHomeOutline className={`ml-2 text-[#b2b1b1] text-[17px]`} />
        {data.map((item: any, index: number) => (
          <li
            key={item.title}
            onClick={() => router.push(item.router)}
            className={`ml-2 md:ml-4 lg:ml-2 text-[${textColor}] font-["yekanBakhtBold"] flex
           items-center justify-center hover:text-[${textColorHover}] hover:cursor-pointer`}
          >
            {item.title}
            {index == data.length - 1 ? (
              ""
            ) : (
              <IoIosArrowBack className={`mr-1 `} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressBar;
