import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosSquareOutline } from "react-icons/io";
import { FaSquare } from "react-icons/fa6";
import LoadBuffer from "@/components/GlobalComponents/Buffer/LoadBuffer";

import testData from "./Base6Image";

interface imageComponentIF {
  imagesProps?: any;
}

const ImageComponent: React.FC<imageComponentIF> = ({ imagesProps }) => {
  const [startX, setStartX] = useState<number | null>(null);

  const [data, setData] = useState<any>(imagesProps);
  const [itemShow, setItemShow] = useState(0);
  const [selected, setSelected] = useState(0);

  const handleClick = (index: number) => {
setSelected(index);
    setItemShow(selected);
    
  };

  //Drag
  const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    const currentX = e.touches[0].clientX;
    if (startX !== null) {
      const deltaX = currentX - startX;

      if (deltaX < -200) {
        const detail = itemShow + 1;

        if (detail >= data.length) {
          setItemShow(0);
          setSelected(itemShow)
        } 
        else
         setItemShow(itemShow + 1);
         setSelected(itemShow)
        console.log("right");

        console.log("left");
        // setItemShow((prev)=>prev-1)
      }
       else if (deltaX > 200) {
        const detail = itemShow - 1;
        if (detail < 0) {
          setItemShow(data.length - 1);
          setSelected(itemShow)
        } else 
        setItemShow(itemShow - 1);
        setSelected(itemShow)
        console.log("right");
      }
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
  };


  console.log(imagesProps)

  return (
    <div className="w-94 lg:w-40 md:w-50 h-[300px] md:h-[500px] flex justify-start relative">
      <Image
        src={LoadBuffer(data, itemShow) as string}
        
        alt="Base64 Image"
        width={0}
        height={0}
        className="w-100 h-[100%] object-cover rounded-none md:rounded-[1%]"
      />
    <div 
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
    className="w-100 h-[100%] bg-rmv absolute z-[1]"
    >

    </div>
    

      {/* imagesPropscroll */}

      <div
        className={
          data.length === 0
            ? `hidden`
            : `w-auto h-[20px] px-2 py-2 rounded-sm bg-mainColor z-[2] absolute bottom-[3%] left-[50%] translate-x-[-50%] flex`
        }
      >
        <ul className="flex justify-center items-center w-100">
          {data.map((item: any, index: number) => (
            <li key={index} onClick={() => handleClick(index)}>
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
};

export default ImageComponent;
