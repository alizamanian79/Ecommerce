import React, { useState } from "react";
import Card from "@/components/Shop/Card/Card";
import Menu from "../GlobalComponents/Menu/Menu";
import AddressBar from "../GlobalComponents/AddressBar/AddressBar";
import NavIcons from "../GlobalComponents/Menu/Phone/NavIcons";
import Categori from "./Categori/Categori";
import { useDispatch, useSelector } from "react-redux";

import BlackScreen from "../GlobalComponents/BlackScreen/BlackScreen";

interface Product {
  pTitle: string;
  pPrice: string;
  pImage: string;
}

// const offlineData: Product[] = [
//   { pTitle: "هنسفیری بلوتوث", pPrice: "350000", pImage: "" },
//   { pTitle: "لباس زنانه مارک", pPrice: "230000", pImage: "" },
//   { pTitle: "سشوار", pPrice: "520000", pImage: "" },
//   { pTitle: "پنکیک", pPrice: "750000", pImage: "" },
//   { pTitle: "تاپیک", pPrice: "470000", pImage: "" },
//   { pTitle: "هیراکستنشن", pPrice: "69000", pImage: "" },
// ];

interface ShopComponentProps {
  dataShop: any[] | undefined;
}

const ShopComponent: React.FC<ShopComponentProps> = ({ dataShop }) => {
  const [products, setProducts] = useState<any>(dataShop);
  const statusBlackScreen = useSelector<any>(
    (state) => state.blackScreen.stScreen
  );

  const handleFilter = (data: string) => {
    // console.log(data);
  };

  return (
    <>
      <BlackScreen />
      <div
        className={
          statusBlackScreen != true
            ? `w-100 h-[100%] flex flex-wrap justify-center 
    relative blur-[0]`
            : `w-100 h-[100%] flex flex-wrap justify-center relative blur-[2px]`
        }
      >

        <Menu />
        <AddressBar
          dataAddress={[
            { title: "خانه", router: "/" },
            { title: "فروشگاه", router: "#" },
          ]}
        />

        <Categori callbackCategori={handleFilter} />

        <div
          className={`w-82 h-auto 
      
      
      flex flex-wrap`}
        >
          {products.map((item: any, index: number) => (
            <Card key={index} data={item} />
          ))}
        </div>

        <NavIcons />
      </div>
    </>
  );
};

export default ShopComponent;
