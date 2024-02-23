import React from "react";
import beautyCollection from "../../../../public/productCategories/beautyCollection.png";
import Image from "next/image";

function SeasonCollection() {
  return (
    <div className={"w-100 h-auto flex flex-wrap"}>
      <Image
        width={0}
        height={0}
        src={beautyCollection}
        className={"w-1/2 h-[550px] object-cover"}
        alt="Man Collection"
      />

      <div className={"w-1/2 h-auto bg-[black] flex flex-wrap "}>
        <div className={"w-1/2 h-1/2 bg-hBack py-1 px-1"}>
          <div className={"w-100 h-full  bg-[#2cc478] py-1 px-1"}></div>
        </div>
        <div className={"w-1/2 h-1/2 bg-hBack py-1 px-1"}>
          <div className={"w-100 h-full  bg-[#257f2b] py-1 px-1"}></div>
        </div>
        <div className={"w-1/2 h-1/2 bg-hBack py-1 px-1"}>
          <div className={"w-100 h-full  bg-[pink] py-1 px-1"}></div>
        </div>
        <div className={"w-1/2 h-1/2 bg-hBack py-1 px-1"}>
          <div className={"w-100 h-full  bg-[#00ff44] py-1 px-1"}></div>
        </div>
      </div>
    </div>
  );
}

export default SeasonCollection;
