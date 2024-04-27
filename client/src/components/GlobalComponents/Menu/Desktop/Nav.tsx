import React, { useState } from "react";
import data from "../navStaticData";
interface Dt {
  data: { title: string; link: string }[];
}
export default function Nav() {
  const [navItems, setNavItems] = useState<Dt["data"]>(data.data);
  const [navSpan, setNavSpan] = useState<number | undefined>(undefined);
  const handleMouseOver = (index: number) => {
    setNavSpan(index);
  };
  return (
    <nav className={`w-3/5 h-[100%] bg-white flex justify-center items-center`}>
      <ul className="w-100 h-[100%]  flex justify-center items-center ">
        {navItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={(evt) => handleMouseOver(index)}
            onMouseLeave={() => setNavSpan(undefined)}
            className={`relative
            transition-all ease-out delay-100
               hover:text-[white]
              text-[black] 
              w-auto h-auto z-1 rounded  lg:px-4 py-1 m-1 md:px-3 md:m-1 
               font-[yekanBakht] lg:text-[17.5px] sm:text-[16.5px] 
              hover:cursor-pointer flex justify-center items-center
           `}
          >
            {item.title}
            <span
              className={
                navSpan === index
                  ? "w-100 rounded h-[100%] bg-[#1b1c1b] absolute z-[-1] right-0  top-[0] transition-[width] ease-in-out delay-150"
                  : "w-0 rounded h-[100%] bg-[#1b1c1b] absolute z-[-1] left-0  top-[0] transition-[width] ease-in-out delay-150"
              }
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
