import React, { useState } from "react";

function Color() {
  const [data, setdata] = useState(["red", "blue", "pink", "green"]);
  const [selected, setSelected] = useState<string>();
  // const handleRenderColor = (color:any) => {
  //   const generateColor = `#${color}`;
  //   return ;
  // };

  const handleClick = (item: string) => {
    setSelected(item);
  };

  return (
    <>
      <ul className={`w-2/5 flex flex-col justify-start  bg-rmv`}>
        <span className={`font-["yekanBakht"] text-[18px] mb-1`}>رنگ ها :</span>
        <div className="flex flex-wrap w-100 h-auto items-center">
          {data.map((item, index) => (
            <li
              key={item}
              onClick={() => handleClick(item)}
              className={
                selected != item
                  ? `
            w-[40px] h-[40px] border border-x-[5px] border-y-[5px]
             border-rmv hover:border-[#494949] hover:cursor-pointer
            rounded-[50%] ml-2`
                  : ` w-[40px] h-[40px] border border-x-[5px] border-y-[5px] hover:cursor-pointer
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
