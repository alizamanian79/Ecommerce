import React, { FC, ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const status: any = useSelector(
    (state: any) => state.searchRedux.searchStatus
  );

  return (
    <div
    
    
      className={
        status === true
          ? `w-100 min-h-screen bg-[#000000ad] absolute z-[11] 
          left-[50%] translate-x-[-50%] flex justify-center transition-display ease-out delay-500`
          : `hidden`
      }
    >

      <button
        className={`absolute top-[5.5rem] left-[24rem] 
        md:top-[5.6rem] md:left-[5rem] max-sm:top-[2rem] max-sm:left-[2.6rem]`}
        
      >
      <FontAwesomeIcon icon={faClose} className={`text-[25px] text-[white]`} />
      </button>

      <div
        className={ status==true 
          ? `transition-[mt] ease-out delay-200  w-44 md:w-70 lg:w-44 max-sm:w-80 h-42 rounded-[5.5px] bg-hBack absolute  mt-20 flex flex-wrap justify-center items-center`
          : `transition-[mt] ease-out delay-200  mt[0]`
          }>
        <input
          type="text"
          name=""
          className={`lg:w-4/5 md:w-3/4 sm:w-4/4 lg:flex md:flex sm:flex justify-start text-right bg-rmv border-r-2 border-[#4a49492a] 
            max-sm:w-100 h-30 outline-none font-[yekanBakht] text-[#272727] pr-2`}
          id=""
          placeholder=" . . . جستجو کنید"
        />

        <div
          className={
            "lg:w-1/5 md:w-1/4 sm:w-4/4 lg:flex md:flex max-sm:hidden justify-center items-center px-5 font-[yekanBakhtBold]"
          }
          style={{ direction: "rtl" }}
        >
          <select
            name=""
            id=""
            className={` border-none outline-none bg-rmv w-200 px-2`}
          >
            <option value="" className={`border-none`}>
              دسته بندی
            </option>
            <option value="" className={`border-none w-50 h-200`}>
              دسته بندی
            </option>
            <option value="" className={`border-none w-50 h-200`}>
              دسته بندی
            </option>
            <option value="" className={`border-none w-50 h-200`}>
              دسته بندی
            </option>
          </select>
        </div>
      </div>
      
    </div>
  );
};

export default Search;
