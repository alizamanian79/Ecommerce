import React, { useEffect, useState } from "react";
import ShopComponent from "@/components/Shop/Layout";

interface SHOPIF {
  initialData?: undefined | any[];
}

const Shop: React.FC<SHOPIF> = ({ initialData }) => {
  const [data, setData] = useState<any[]>(initialData || []);

  return (
    <>
      <ShopComponent data={data} />
    </>
  );
};

async function fetchingProducts() {
  let APIKEY = process.env.NEXT_PUBLIC_VALID_API_KEY_PRODUCT;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product/list`, {
      method: "GET",
      headers: {
        headerLock: `${APIKEY}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
}

export async function getServerSideProps() {
  try {
    const initialData = await fetchingProducts();
    return {
      props: {
        initialData,
      },
    };
  } catch (error: any) {
    return {
      props: {
        error: error.message,
      },
    };
  }
}

export default Shop;
