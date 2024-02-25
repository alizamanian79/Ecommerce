import React, { ReactEventHandler } from "react";
import Image from "next/image";
import manCollection from "../../../../public/productCategories/mansCollection.png";
import kidsCollection from "../../../../public/productCategories/kidsCollection.png";
import womanCollection from "../../../../public/productCategories/womanCollection.png";
import beautyCollection from "../../../../public/productCategories/beautyCollection.png";
import homeCollection from "../../../../public/productCategories/Home and living collection.png";

const imageStyles = 'w-97 h-[97%] object-cover rounded-[2px] hover:cursor-pointer hover:shadow-lg transition-all ease-out delay-75';

export default function ProductCard() {

  const handleClick = (e:any,value:string) =>{
    e.preventDefault()
    alert(value)
  }

  return (
    <div className={`w-100 h-auto flex flex-wrap`}>

      <div onClick={(e)=>handleClick(e,'man')} className={"w-2/4 h-auto max-sm:w-[100%] rmv flex justify-center items-center hover:cursor-pointer "}>
          <Image
            src={manCollection}
            className={imageStyles}
            alt="Man Collection"
          />
      </div>

      <div onClick={(e)=>handleClick(e,'woman')} className={"w-1/4 h-auto max-sm:w-[50%] bg-rmv flex justify-center items-center hover:cursor-pointer "}>
      <Image
            src={kidsCollection}
            className={imageStyles}
            alt="Kids Collection"
          />
      </div>

      <div onClick={(e)=>handleClick(e,'woman')} className={"w-1/4 h-auto max-sm:w-[50%] bg-rmv flex justify-center items-center hover:cursor-pointer "}>
      <Image
            src={womanCollection}
            width={250}
            height={250}
            className={imageStyles}
            alt="Woman Collection"
          />
      </div>

      <div onClick={(e)=>handleClick(e,'beauty')} className={"w-2/4 h-auto max-sm:w-[100%] flex justify-center items-center hover:cursor-pointer "}>
      <Image
            src={beautyCollection}
            className={imageStyles}
            alt="Beauty Collection"
          />
      </div>

      <div onClick={(e)=>handleClick(e,'home')} className={"w-2/4 h-auto max-sm:w-full bg-rmv flex justify-center items-center hover:cursor-pointer "}>
      <Image
            src={homeCollection}
            className={imageStyles}
            alt="Home Collection"
          />
      </div>

    </div>
  );
}