import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../GlobalComponents/Menu/Menu";
import AddressBar from "../GlobalComponents/AddressBar/AddressBar";

import ImageComponent from "./ImageComponent/ImageComponent";
import InformationComponent from "./InformationComponent/InformationComponent";
import ConvertBuffer from "@/components/GlobalComponents/Buffer/ConvertBuffer/ConvertBuffer";
import noRepetition from "../GlobalComponents/Norepetition/Norepetition";


interface LAYOUTIF {
  param: any;
}

const Layout: React.FC<LAYOUTIF> = ({ param }) => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    axios
      .get(`${process.env.LOCALHOST}/api/products/list`)
      .then((reponse) => {
        const res = reponse.data;
        for (let i = 0; i < res.length; i++) {
          if (res[i].pTitle == param) {
            setData(res[i]);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(data);

  const myArr = ["red", "pink", "blue", "red", "blue", "green", "red"];
  const result = noRepetition(myArr); // Call the function with your array
  
  console.log("Unique Items:", result.uniqueItems); // Print unique items
  console.log("Repetition Items:", result.repetitionItems); // Print repetition items

  return (
    <>
      <Menu />
      <AddressBar
        dataAddress={[
          { title: "خانه", router: "/" },
          { title: "فروشگاه", router: "" },
          { title: "محصول", router: "" },
        ]}
      />

      <div
        className={`relative w-100 min-h-screen flex bg-hBack flex-col blur-[0] items-center`}
        style={{ direction: "rtl" }}
      >
        <div
          className={`w-100 lg:w-94 md:w-94 h-auto flex-wrap justify-center flex flex-row min:flex-col mt-3
         md:mt-5`}
          style={{ direction: "ltr" }}
        >
          {data ? (
            <>
              <ImageComponent imagesProps={data.pImages} />
              <InformationComponent
                title={data.pTitle}
                description={data.pDescription}
                color={data.pColor}
                introduce={data.pIntroduce}
                size={data.pSize}
              />
            </>
          ) : (
            <>
              <div
                className={`w-100 h-auto flex justify-center md:justify-start`}
              >
                <p className={`w-94 font-[yekanBakht] text-[17px] `}>
                  {param} پیدا نشد
                </p>
              </div>
            </>
          )}

          {/* <ConvertBuffer /> */}

          {/* {myArr.map((item) => (
            <p className="text-[black]">{item}</p>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Layout;
