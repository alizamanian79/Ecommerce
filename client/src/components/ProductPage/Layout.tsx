import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../GlobalComponents/Menu/Menu";
import AddressBar from "../GlobalComponents/AddressBar/AddressBar";

import ImageComponent from "./ImageComponent/ImageComponent";
import InformationComponent from "./InformationComponent/InformationComponent";
import ConvertBuffer from "@/components/GlobalComponents/Buffer/ConvertBuffer/ConvertBuffer";

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
          className={`w-100 lg:w-94 md:w-94 h-auto flex-wrap flex flex-row min:flex-col 
         justify-start md:mt-5`}
        >
          {data && (
            <>
              <ImageComponent images={data.pImages} />
              <InformationComponent />
            </>
          )}

          <ConvertBuffer />
        </div>
      </div>

      {param}
    </>
  );
};

export default Layout;
