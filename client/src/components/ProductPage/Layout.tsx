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
  const [show, setShow] = useState<any>();


const getProducts=()=>{
  axios
  .get(`${process.env.LOCALHOST}/api/products/list`)
  .then((reponse) => {
    setData(reponse);
  })
  .catch((error) => {
    console.log(error);
  });

}

  useEffect(() => {
    const fetchData = async () => {
      await getProducts();
    };

    const interval = setInterval(fetchData, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);






console.log(show)
  

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
        className={`relative w-100 min-h-screen flex bg-[#f5f5f5bc] flex-col blur-[0] items-center`}
        style={{ direction: "rtl" }}
      >
        <div
          className={`w-100 lg:w-94 md:w-94 h-auto flex-wrap justify-center flex flex-row min:flex-col mt-3 md:mt-5`}
          style={{ direction: "ltr" }}
        >
          {show ? (
            <>
              <ImageComponent imagesProps={show.pImages} />
              <InformationComponent
                id={show.pID}
                title={show.pTitle}
                description={show.pDescription}
                color={show.pColor}
                introduce={show.pIntroduce}
                size={show.pSize}
                total={show.pTotal}
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
