import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosSquareOutline } from "react-icons/io";
import { FaSquare } from "react-icons/fa6";
import LoadBuffer from "@/components/GlobalComponents/Buffer/LoadBuffer/LoadBuffer";

import data from "./Base6Image";

function ImageComponent() {
  const [itemShow, setItemShow] = useState(0);
  const [selected, setSelected] = useState(0);

const handleClick = (index:number)=>{
    setItemShow(index);
    setSelected(index);
}

  return (
    <div className="w-100 lg:w-40 md:w-50 h-[300px] md:h-[500px] flex justify-start relative">
      <Image
        src={LoadBuffer(data, itemShow) as string}
        alt="Base64 Image"
        width={0}
        height={0}
        className="w-100 h-[100%] object-cover rounded-none md:rounded-[1%]"
      />

      {/* ImageScroll */}
      <div className="w-auto h-[20px] px-2 py-2 rounded-sm bg-mainColor absolute bottom-[3%] left-[50%] translate-x-[-50%] flex">
        <ul className="flex justify-center items-center w-100">
          {data.map((item, index) => (
            <li
              key={index}
              onClick={()=>handleClick(index)}
            >
              {selected == index ? (
                <FaSquare className="text-[#ffffff] hover:cursor-pointer" />
              ) : (
                <IoIosSquareOutline className="text-[white] hover:cursor-pointer" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ImageComponent;
