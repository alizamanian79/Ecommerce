import React, { useState } from "react";
import Image from "next/image";

import seasonStaticData from "./seasonStaticData";
import winter from "../../../../public/Season/winter.png";

function SeasonCollection() {
  const [data, setData] = useState(seasonStaticData);

  return (
    <div className={"w-100 h-auto flex flex-wrap"}>
      <div className={"w-1/2 h-auto md:w-1/2 max-sm:w-100 object-cover"}>
        <Image
          width={0}
          height={0}
          src={winter}
          className={
            "w-100 h-[97%] object-cover hover:cursor-pointer h:transform:scale(10.2);"
          }
          alt="Man Collection"
        />
      </div>

      <div
        className={
          "w-1/2 h-auto max-sm:w-100 bg-hBack flex justify-center items-center"
        }
      >
        <div
          className={
            "w-97 h-[97%] max-sm:w-100  flex flex-wrap justify-between items-center"
          }
        >
          {data.map((item, key) => (
            <div
              className={
                "w-[49.5%] h-[49%] bg-sBack flex flex-col justify-center rounded-[5px] items-center object-cover relative hover:cursor-pointer"
              }
            >
              {item.image && (
                <Image
                  src={item.image}
                  width={0}
                  height={0}
                  alt=""
                  className="w-100 h-[100%] object-cover rounded-[5px]"
                />
              )}

              <div
                className={`absolute top-[50%] translate-y-[-50%] flex flex-col justify-center items-center`}
              >
                <p
                  className={
                    "font-[vazir] sm:text-[16px]  md:text-[17px] lg:text-[17px] text-[white] mb-[5px]"
                  }
                >
                  {item.title}
                </p>
                <p
                  className={
                    "font-[yekanBakhtBold] max-sm:text-[23px] md:text-[29px] lg:text-[50px] text-[white]"
                  }
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SeasonCollection;
