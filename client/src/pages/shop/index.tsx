import React from "react";
import ShopComponent from "@/components/Shop/Layout";
import fetch from 'node-fetch';

interface SHOPIF {
  data?: undefined | any[];
}

const Shop: React.FC<SHOPIF> = ({ data }) => {
  return(
    <>
    shop
    {/* <ShopComponent dataShop={data} /> */}
    </>
  )
   
};

async function fetchingProducts() {
  try {
    const res = await fetch(
      `${process.env.HOSTADRESS || process.env.LOCALHOST}/api/products/list`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data, status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getStaticProps() {
  try {
    const data = await fetchingProducts();
    return {
      props: {
        data,
      },
      revalidate: 10, 
    };
  } catch (error:any) {
    return {
      props: {
        error: error.message,
      },
    };
  }
}



export default Shop;
