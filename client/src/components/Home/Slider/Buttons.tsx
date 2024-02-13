import React,{useEffect,useState,useRef} from "react";

interface btnIF {
    cb:any
}


const Buttons:React.FC<btnIF>= ({cb})=>{

  const handleBTN = (value: any):any => {
    cb(value)
  };


  return (
    <div
      className="absolute z-[1] w-100  flex justify-center
     items-cente top-[50%] translate-y-[-50%]"
    >
      <div className="w-96 max-sm:w-94 flex justify-between items-center">
        <button className={" text-[black] text-[31px] max-sm:text-[21px]"} onClick={()=> handleBTN("prev")} > {'<'} </button>
        <button className={"text-[black] text-[31px] max-sm:text-[21px]"} onClick={()=> handleBTN("after")} > {'>'} </button>
      </div>
    </div>
  );
}

export default Buttons;
