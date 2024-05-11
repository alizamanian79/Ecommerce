import React, { useState } from "react";
import data from "../navStaticData";
import { useRouter } from "next/router";

//
import { useDispatch, useSelector } from "react-redux";
import menuRedux, {
  handleChangeMenuStatus,
  handleChosen,
} from "@/redux/actions/menuRedux";



interface Dt {
  data: { title: string; link: string }[];
}
export default function Nav() {

  const dispatch = useDispatch();
 

  const [navItems, setNavItems] = useState<Dt["data"]>(data.data);
  const [navSpan, setNavSpan] = useState<number | undefined>(undefined);
  const router = useRouter();

  const selected =useSelector<any>((state) => state.menuRedux.chosen);



  const handleMouseOver = (index: number) => {
    setNavSpan(index);
  };

const handleClickRouter = (title:string,link:string)=>{
dispatch(handleChosen({chosen:title}))
router.push({
  pathname:link
})
}
  return (
    <nav className={`w-3/5 h-[100%] bg-white flex justify-center items-center`}>
      <ul className="w-100 h-[100%]  flex justify-center items-center ">
        {navItems.map((item, index) => (
          <li
         onClick={()=>handleClickRouter(item.title,item.link)}
            key={index}
            onMouseEnter={(evt) => handleMouseOver(index)}
            onMouseLeave={() => setNavSpan(undefined)}
            className={selected==item.title ? ` 
            
            relative
            transition-all ease-out delay-100
              bg-[black]
              text-[#ffffff] 
              w-auto h-auto z-1 rounded  lg:px-4 py-1 m-1 md:px-3 md:m-1 
               font-[yekanBakht] lg:text-[17.5px] sm:text-[16.5px] 
              hover:cursor-pointer flex justify-center items-center
            
            
            `: `relative
            transition-all ease-out delay-100
               hover:text-[white]
               bg-rmv
              text-[#000000] 
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
