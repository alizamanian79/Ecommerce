import React from "react";
import Image from "next/image";
import img from "../../../../public/Season/winter.jpg";

import TextLayout from "./TextLayout";

function SendEmail() {
  return (
    <div className={`w-100 
    lg:h-[550px] md:h-[400px] max-sm:h-[350px]  
    
    lg:mt-[5rem]
    md:mt-[3.5rem] 
    sm:mt-[4rem]
    
    bg-rmv py-5
    
    
    `}>

      <div className="relative w-100 h-full">

        <TextLayout />


        <Image
          width={0}
          height={0}
          src={img}
          className={`w-100 h-[100%] object-cover rounded-md`}
          alt="Winter"
        />
      </div>

        

    </div>
  );
}

export default SendEmail;
