import React, { useState } from "react";
import { GiArmoredPants, GiAmpleDress } from "react-icons/gi";
import { IoMdPhonePortrait } from "react-icons/io";
import { CiPenpot } from "react-icons/ci";

interface CategoriIF {
    callbackCategori :(data:string|undefined)=>void;
}

const  Categori:React.FC<CategoriIF> =({callbackCategori})=> {
  const [data, setData] = useState<any>([
    { title: "man", icon: GiArmoredPants },
    { title: "woman", icon: GiAmpleDress },
    { title: "Pen", icon: CiPenpot },
    { title: "Phone", icon: IoMdPhonePortrait },
  ]);
  const [selected, setSelected] = useState<string | undefined>("man");

  callbackCategori(selected)


  return (
    <div className={`w-100 h-[auto]  flex flex-wrap justify-center`}>
      <span
        className={`w-94  py-3 font-[yekanBakhtBold] text-[20px] flex justify-end`}
      >
        دسته بندی
      </span>

      <ul
        className={`w-94 h-auto  flex overflow overflow-x-auto py-1 justify-end`}
      >
        {data.map((item: any, index: number) => (
          <li
            onClick={() => setSelected(item.title)}
            key={index}
            className={
              selected === item.title
                ? `min-w-[50px] h-[50px] bg-color2 transition-all ease-out delay-100 blur-0
            rounded-[50%] flex justify-center items-center ml-2 text-[white] cursor-pointer`
                : `min-w-[50px] h-[50px] bg-[#313131] transition-all ease-out delay-100 blur-[0.6px]
       rounded-[50%] flex justify-center items-center ml-2 text-[white] cursor-pointer`
            }
          >
            <item.icon style={{ fontSize: "25px" }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categori;
