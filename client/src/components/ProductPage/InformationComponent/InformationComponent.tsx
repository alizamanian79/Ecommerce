import React, { useState } from "react";
import ColorComponent from "./ColorComponent/Color";
import SizeComponent from "./SizeComponent/Size";


interface INFORMATIONPROPSIF{
  description?:string
  color?:string
  introduce?:string
  size?:string
}

const InformationComponent:React.FC<INFORMATIONPROPSIF>=({description,color,introduce,size})=>{
  
  console.log(size)
  return (
    <div
      className={`w-100 lg:w-60 md:w-50
     md:h-[500px] flex justify-start flex-col
     px-[1rem]
     py-[1rem]
      min-h-[300px]
      max-h-[auto]
     `}
      style={{ direction: "rtl" }}
    >
      <h3 className={`font-["yekanBakhtBold"] text-[30px]`}>لباس جدید ما</h3>
      <h4 className={`font-["yekanBakht"] text-[15px] md:text-[19px]`}>
       {description}
      </h4>

      <div className="w-100 h-auto flex flex-wrap mt-[1.5rem] bg-rmv">
        <ColorComponent />
        <SizeComponent />
      </div>

    </div>
  );
}

export default InformationComponent;
