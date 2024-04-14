import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../GlobalComponents/Menu/Menu";
import AddressBar from "../GlobalComponents/AddressBar/AddressBar";

import ImageComponent from "./ImageComponent/ImageComponent";
import InformationComponent from "./InformationComponent/InformationComponent";

interface LAYOUTIF {
  param: any;
}

const Layout: React.FC<LAYOUTIF> = ({ param }) => {
  const [data, setData] = useState<any[] | string[] | string | any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${process.env.LOCALHOST}/api/products/list`;
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleLoad = (param: any) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].pTitle === param) {
        return data[i].map((item: any) => {
          return <p key={item.pID}>{item.pTitle}</p>;
        });
      }
    }
    return null;
  };

  console.log(data);
  return (
    <>
      <Menu />
      <AddressBar
        data={[
          { title: "خانه", router: "/" },
          { title: "فروشگاه", router: "" },
          { title: "محصول", router: "" },
        ]}
      />

      <div
        className={`relative w-100 min-h-screen flex bg-hBack flex-col blur-[0] items-center`}
        style={{ direction: "rtl" }}
      >
        <div className={`w-100 lg:w-94 md:w-94 h-auto flex-wrap flex flex-row min:flex-col 
         justify-start md:mt-5`}>
          <ImageComponent />
          <InformationComponent />



        </div>
      </div>

      {param}
    </>
  );
};

export default Layout;
