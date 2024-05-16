import React, { useState } from "react";

import Image from "next/image";
function ImageComponent() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };
  return (
    <div className={`w-1/3 h-auto relative`}>
      {imageUrl && (
        <div>
          <Image
            src={imageUrl}
            width={200}
            height={200}
            className="rounded-[100%]"
            alt=""
          />
        </div>
      )}
      <input
        className="z-0 w-100 h-[100%] opacity-0 absolute top-0"
        placeholder=""
        type="file"
        id="imageUpload"
        accept="image/*"
        onChange={handleImageUpload}
      />
    </div>
  );
}

export default ImageComponent;
