import React, { useEffect, useState } from "react";
import ShopComponent from "@/components/Shop/Layout";

interface SHOPIF {
  initialData?: any[]; // Removed 'undefined' as it's covered by optional type
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
  try {
    const res = await fetch(`http://localhost:3000/api/product/list`, {
      method: "GET",
      headers: {
        headerLock: `${process.env.NEXT_PUBLIC_VALID_API_KEY_PRODUCT}`, // If this is a custom header, it's fine, otherwise consider 'Authorization'
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching product data:", error); // Changed log message for clarity
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
        initialData: [], // Return empty array if there's an error to avoid undefined issues
        error: error.message, // Include error message if needed
      },
    };
  }
}

export default Shop;
