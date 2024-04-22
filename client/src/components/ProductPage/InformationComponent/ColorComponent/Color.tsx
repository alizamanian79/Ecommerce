import React, { useState } from "react";

interface COLORIF {
  dataColor?:string
}

const Color:React.FC<COLORIF>=({dataColor})=>{

  

  const [data, setdata] = useState([dataColor]);

  const [selected, setSelected] = useState(dataColor);
 

  const handleClick = (item: string) => {
    setSelected(item);
  };

  const handleColor = (color: string) => {
    let generate = "";
    switch (color) {
      case "red":
        generate = "red";
        return;
        break;

      case "blue":
        generate = "blue";
        return;
        break;

      case "black":
        generate = "blue";
        return;
        break;

      default:
        break;
    }
  };


  return (
    <>
    <span className={`font-["yekanBakht"] text-[18px] mb-1 w-100`}>رنگ ها :</span>
      <ul className={`w-2/5 flex flex-col justify-start  bg-rmv`}>
        
        <div className="flex flex-wrap w-100 h-auto items-center">
          {data.map((item:any, index) => (
            <li
              key={item}
              onClick={() => handleClick(item)}
              className={
                selected != item
                  ? `
            w-[35px] h-[35px]
            md:w-[50px] md:h-[50px]
            
            border border-x-[5px] border-y-[5px]
             border-rmv hover:border-[#494949] hover:cursor-pointer
            rounded-[50%] ml-2`
                  :
                   `
                   w-[35px] h-[35px]
            md:w-[50px] md:h-[50px]

                  border border-x-[5px] border-y-[5px] hover:cursor-pointer
            border-[#494949]
           rounded-[50%] ml-2`
              }
              style={{ backgroundColor: item }}
            ></li>
          ))}
        </div>
      </ul>
    </>
  );
}

export default Color;
