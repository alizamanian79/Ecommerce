import React, { useState, useEffect } from "react";
import Image from "next/image";
import LoadBuffer from "@/components/GlobalComponents/Buffer/LoadBuffer/LoadBuffer";
import defaultImage from "./base64";

function ImageComponent() {
  const [imageSrc, setImageSrc] = useState<null | any>(null);

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
    <div className="w-1/3 h-auto relative flex justify-center">
      <div>
        <Image
          src={imageSrc == null ? defaultImage : imageSrc}
          width={0}
          height={0}
          className="w-[188px] h-[188px] object-cover rounded-[100%] border-[2px] border-[#949494] hover:cursor-pointer"
          alt=""
        />
      </div>

    {imageSrc !=null ? <>
    <p  className={`z-0 w-100 h-[100%] 
    opacity-1 absolute top-[88%] 
    font-[yekanBakht]
    left-[11%]`}>برای تغییر عکس  روی عکس کیلیک کنید</p>
    </>:
    <>
      <input
        className="z-0 w-100 h-[100%] opacity-1 absolute top-[88%] left-[17%]"
        placeholder="e"
        type="file"
        id="imageUpload"
        accept="image/*"
        onChange={handleImageChange}
      />
    </>
    }
    
    </div>
  );
}

export default ImageComponent;
