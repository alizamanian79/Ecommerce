import React, { FC, ReactNode, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import {isSearch} from "@/redux/actions/searchRedux";
import { useDispatch,useSelector } from "react-redux";

  const Search = () => {
    
    const dispatch = useDispatch();
    const status:any = useSelector((state:any)=>state.searchRedux.searchStatus)

    return (
    
    <div
        className={ status===true 
          ? `w-100 min-h-screen bg-[#000000ad] absolute z-[11] left-[50%] translate-x-[-50%] flex justify-center `
          : `hidden`
          
        }
        >
        <button onClick={()=>dispatch(isSearch({searchStatus:!status}))}>Click</button>

        <div
          className={`w-44 md:w-70 lg:w-44 max-sm:w-80 h-42 rounded-[5.5px] bg-hBack absolute top-[12] mt-20 flex flex-wrap justify-center items-center`}
        >
          <input
            type="text"
            name=""
            className={`lg:w-4/5 md:w-3/4 sm:w-4/4 lg:flex md:flex sm:flex justify-start text-right bg-rmv border-r-2 border-[#4a49492a] 
            max-sm:w-100 h-30 outline-none font-[yekanBakht] text-[#272727] pr-2`}
            id=""
            placeholder=" . . . جستجو کنید"
          />

          <div className={"lg:w-1/5 md:w-1/4 sm:w-4/4 lg:flex md:flex max-sm:hidden justify-center items-center px-5 font-[yekanBakhtBold]"} style={{direction:"rtl"}}>
          
          <select name="" id="" className={` border-none outline-none bg-rmv w-200 px-2`}>
            <option value="" className={`border-none`}>دسته بندی</option>
            <option value="" className={`border-none w-50 h-200`}>دسته بندی</option>
            <option value="" className={`border-none w-50 h-200`}>دسته بندی</option>
            <option value="" className={`border-none w-50 h-200`}>دسته بندی</option>
          </select>


{/* <FontAwesomeIcon icon={faCoffee} /> */}

          </div>




        </div>
      </div>
  )
}

export default Search;
