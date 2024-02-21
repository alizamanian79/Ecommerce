import React from "react";

import Link from "next/link";

import Image from "next/image";
import firstImage from "../../../../public/Sliders/1.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse , faCartShopping,faHeart} from "@fortawesome/free-solid-svg-icons";

function RecentlyProduct() {
  return (
    <div className="w-100 h-auto py-6  flex flex-wrap justify-start items-center bg-[black]">


      <Link href="/" className={"w-1/4 h-[500px] bg-red"}>
        <Image
          src={firstImage}
          width={0}
          height={0}
          alt={""}
          className="w-auto h-4/6 object-cover"
        />

        <div className={"w-100 h-2/6 bg-[#28558d] px-6 py-6"}>
          <p className={'text-[28px] font-[yekanBakhtBold]'}>نام محصول</p>
          <p className={'text-[17px] font-[yekanBakht] mt-[5px]'}>دسته : {'کودک'}</p>


        <div className={'w-100 h-[37px] bg-rmv mt-[5px] flex justify-between items-center'}>
            
            starsRating

            <div className={`w-28 flex justify-between items-center`}>
            <FontAwesomeIcon icon={faHeart} className={'py-[12px] px-[12px] bg-[#222529] text-[15px] text-[white] rounded-sm'} />
            <FontAwesomeIcon icon={faCartShopping} className={'py-[12px] px-[12px] bg-[#222529] text-[15px] text-[white] rounded-sm'} />
            </div>

        </div>

        </div>
      </Link>


    </div>
  );
}

export default RecentlyProduct;
