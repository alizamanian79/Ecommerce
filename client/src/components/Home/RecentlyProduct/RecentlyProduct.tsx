import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import firstImage from "../../../../public/Sliders/1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse , faCartShopping,faHeart} from "@fortawesome/free-solid-svg-icons";



function RecentlyProduct() {
  const [productData, setProductData] = useState([
  {id:1,title:"لباس زنانه",description:"هرچی",categori:"لباس زنانه"},
  {id:1,title:"لباس زنانه",description:"هرچی",categori:"لباس زنانه"},
  {id:1,title:"لباس زنانه",description:"هرچی",categori:"لباس زنانه"},
  {id:1,title:"لباس زنانه",description:"هرچی",categori:"لباس زنانه"}
  ])
  return (
    <div className="w-100 h-auto py-6  flex flex-wrap justify-start items-center bg-rmv ">

    {productData.map((item)=>(
  <Link href="/" className={`lg:w-1/4 md:w-33 sm:w-100  lg:h-[500px] md:h-auto sm:h-auto
   flex justify-center items-cente

    px-2 py-2
    
    max-sm:px-0 max-sm:py-1
    
    `}>
        <div className={`w-100 h-full shadow-lg bg-[white]`}>      
        <Image
          src={firstImage}
          width={0}
          height={0}
          alt={""}
          className="w-auto h-4/6 object-cover"
        />

        <div className={"w-100 h-2/6  px-6 py-6"}>
          <p className={'text-[28px] font-[yekanBakhtBold]'}>نام محصول</p>
          <p className={'text-[17px] font-[yekanBakht] mt-[5px]'}>دسته : {'کودک'}</p>


        <div className={'w-100 h-[37px] bg-rmv mt-[5px] flex justify-between items-center'}>
            
            starsRating

            <div className={`lg:w-30 max-sm:w-25 md:w-38  
            
            flex justify-between items-center`}>
            <FontAwesomeIcon icon={faHeart} className={'py-[12px] px-[12px] md:py-[8px] md:px-[8px] bg-[#222529] text-[15px] text-[white] rounded-sm'} />
            <FontAwesomeIcon icon={faCartShopping} className={'py-[12px] px-[12px] md:py-[8px] md:px-[8px]  bg-[#222529] text-[15px] text-[white] rounded-sm'} />
            </div>

        </div>

        </div>
        </div>
      </Link>

    ))}

    
  

     
   
    </div>
  );
}

export default RecentlyProduct;
