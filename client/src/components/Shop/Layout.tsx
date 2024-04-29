import React, { useState } from "react";
import Card from "@/components/Shop/Card/Card";
import Menu from "../GlobalComponents/Menu/Menu";
import AddressBar from "../GlobalComponents/AddressBar/AddressBar";
import NavIcons from "../GlobalComponents/Menu/Phone/NavIcons";
interface Product {
  pTitle: string;
  pPrice: string;
  pImage: string;
}

const offlineData: Product[] = [
  { pTitle: "هنسفیری بلوتوث", pPrice: "350000", pImage: "" },
  { pTitle: "لباس زنانه مارک", pPrice: "230000", pImage: "" },
  { pTitle: "سشوار", pPrice: "520000", pImage: "" },
  { pTitle: "پنکیک", pPrice: "750000", pImage: "" },
  { pTitle: "تاپیک", pPrice: "470000", pImage: "" },
  { pTitle: "هیراکستنشن", pPrice: "69000", pImage: "" },
];

interface ShopComponentProps {
  dataShop: any[] | undefined;
}

const ShopComponent: React.FC<ShopComponentProps> = ({ dataShop }) => {
  const [products, setProducts] = useState(dataShop);
  console.log(products)

  return (
    <div className="w-100 h-auto flex flex-wrap">
      <Menu />
      <AddressBar
        dataAddress={[
          { title: "خانه", router: "/" },
          { title: "فروشگاه", router: "#" },
        ]}
      />

      <div className={`w-82 h-auto flex flex-wrap`}>
        {products.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>

      <div className={`w-18 h-auto bg-red`}>

      </div>

      <NavIcons />
    </div>
  );
};

export default ShopComponent;
