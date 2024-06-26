import React, { useState } from "react";

interface COMPONENT{
  dataSize?:string
}

const Size:React.FC<COMPONENT>=({dataSize})=>{
  const [data, setdata] = useState([dataSize]);
  const [selected, setSelected] = useState<string | undefined>(dataSize);

  const handleClick = (item:string)=>{
    setSelected(item)
  }

  return (
    <>
      <ul
        className={`w-3/5 h-auto flex flex-wrap-reverse px-2 justify-start items-center`}
      style={{direction:"ltr"}}
      >
        {data.map((item:any, index) => (
          <li
          key={index}
          onClick={()=>handleClick(item)}
            className={
              selected !=item ? 
              `
              w-[35px] h-[35px]
            md:w-[50px] md:h-[50px]

              mr-1 rounded-[65%]  border border-[#383838]
           bg-[#f1f1f1] flex justify-center items-center text-center hover:bg-mainColor
           cursor-pointer hover:text-[white] bg-rmv`
           :
           `
           w-[35px] h-[35px]
            md:w-[50px] md:h-[50px]

           mr-1 rounded-[65%]  border border-[#383838]
            flex justify-center items-center text-center bg-mainColor
           cursor-pointer text-[white]`
          
          }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Size;
