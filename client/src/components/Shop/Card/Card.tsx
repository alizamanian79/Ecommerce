import React from "react";
import Image from "next/image";
import { IoHeart } from "react-icons/io5";
import { FaShareNodes } from "react-icons/fa6";
import { useRouter } from "next/router";

import defaultProductImage from "./defaultProductImage";
import { title } from "process";

interface CARDIF {
  data: any;
}

const Card: React.FC<CARDIF> = ({ data }) => {
  let number = parseInt(data.pPrice);

  let formattedNumber = number
    .toLocaleString("en", { useGrouping: true })
    .replace(/,/g, ",");

  const router = useRouter();

  const handleClick = (title: string) => {
    router.push(`/shop/${title}`);
  };

  const handleAddToFavorite = (data: any) => {
    alert(data.pTitle);
  };




  return (
    <div
      onClick={() => handleClick(data.pTitle)}
      className={`
    w-[100%] h-[auto] mx-[0%] mt-5
    md:w-[31%] md:h-[auto] md:mx-[1%] md:mt-5
    lg:w-[23%] lg:h-[auto] lg:mx-[1%] lg:mt-5
    
    cursor-pointer
    relative
    flex flex-col 
    

    py-3
    px-3
    rounded-md
    border-[1px]
    border-[#d5d5d5]

    hover:shadow-lg

    transition-all delay-75

    mb-3

    `}
    >
      <IoHeart
        onClick={() => handleAddToFavorite(data)}
        className="z-[0] top-[8px] left-[5px] cursor-pointer hover:text-color2 text-[20px] absolute flex justify-center items-end"
      />
      <FaShareNodes className="z-[0] top-[8px] left-[30px] cursor-pointer hover:text-color2  text-[20px] absolute flex justify-center items-end" />

      <Image
        className={`w-100 h-[15rem] rounded-lg object-cover`}
        src={data.pImages[1]!==null? `data:image/png;base64,${data.pImages[1]}`:`data:image/png;base64,${defaultProductImage}`}
       
        width={0}
        height={0}
        alt="image"
      />

      <div className={`w-100 h-[auto] mt-2  flex flex-col`}>
        <span
          className={`w-100 h-[61px] flex justify-end font-[yekanBakhtBold] text-[21px]`}
          style={{ textAlign: "right" }}
        >
          {data.pTitle}
        </span>

        <div className={`w-100 flex justify-between mt-1 px-1`}>
          <button
            onClick={() => handleClick(data.pTitle)}
            className={`w-auto h-auto px-6 py-1 rounded-md
            
            transition-all ease-out delay-[0.5]
            
            border-[1.7px] border-[#e3e2e2] hover:bg-color2 hover:border-color2 hover:text-[white]
            
            bg-rmv font-[yekanBakhtBold] text-[13px] text-[#373737]`}
          >
            افزودن
          </button>
          <p
            className={`font-[yekanBakhtBold] text-[20px] text-[#282727] flex`}
          >
            <span>تومان </span> <span className="ml-1">{formattedNumber}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
