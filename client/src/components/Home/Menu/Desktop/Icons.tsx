import React, { FC, useState } from "react";
import {isSearch} from "@/redux/actions/searchRedux";
import { useDispatch,useSelector } from "react-redux";


export default function Icons() {
  const dispatch = useDispatch();
  const status:any = useSelector((state:any)=>state.searchRedux.searchStatus)

  return (
    <div className={`w-1/5 h-[100%] bg-white flex justify-end items-center`}>
     <ul className={`flex`}>
      <li className={`px-2 py-2 relative hover:cursor-pointer`} onClick={()=>dispatch(isSearch({searchStatus:!status}))}><SearchIcon /></li>
      <li className={`px-2 py-2 relative hover:cursor-pointer`}><HeartIcon /></li>


      <li className={`px-2 py-2  relative hover:cursor-pointer`}> 
      <span className={`absolute top-[-6px] right-[-3px] 
      rounded-full w-[16px] h-16 bg-[#ef4444] text-[10px] text-center flex justify-center items-center text-[white]`}>5</span> 
      <ShoppingCartIcon />
      </li>


      <li className={`px-2 py-2 relative hover:cursor-pointer`}><UserIcon /></li>
      </ul> 
      
      
      
    </div>
  );
}

const iconWidth = "20px";
const iconHeight = "20px";

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
