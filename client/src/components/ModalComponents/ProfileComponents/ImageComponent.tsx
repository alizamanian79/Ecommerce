import React, { useState, useEffect } from "react";
import Image from "next/image";
import LoadBuffer from "@/components/GlobalComponents/Buffer/LoadBuffer/LoadBuffer";
import defaultImage from "./base64";

interface img  {
  callBack:(data:string)=>void
}

const ImageComponent : React.FC <img> =({callBack})=> {
  
  const [imageSrc, setImageSrc] = useState<null | any>(null);
  callBack(imageSrc)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setImageSrc(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    console.log(imageSrc);
  }, [imageSrc]);

  return (
    <div className="w-100 md:w-1/3 lg:w-1/3 h-auto relative flex justify-center items-center flex-col">
      <div>
        <Image
          src={imageSrc == null ? defaultImage : imageSrc}
          width={0}
          height={0}
          className="w-[188px] mb-4 h-[188px] object-cover rounded-[100%] border-[2px] border-[#949494] hover:cursor-pointer"
          alt=""
        />
      </div>

      {imageSrc != null ? (
        <>
          <p
            className={`z-0 w-100 h-[auto] flex justify-center items-center mt-3
    font-[yekanBakht]
  `}
          style={{textAlign:"right"}}>
            برای تغییر عکس روی عکس کیلیک کنید
          </p>
      
          <input
            className="z-[10] w-100 h-[70%] cursor-pointer opacity-0 absolute top-[0%] left-[0%]"
            placeholder="e"
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
          />
        </>
      ) : (
        <>
            <span className="w-100 h-[100%] mt-3 flex justify-center items-center">
          <input
            className="z-[10] w-100 h-[100%] opacity-1 absolute top-[88%] left-[17%]"
            placeholder="e"
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
          />
          </span>
        </>
      )}

    </div>
  );
}

export default ImageComponent;
