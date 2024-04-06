import React from "react";

interface PRODUCTSIF {
  products: any;
}

const Products: React.FC<PRODUCTSIF> = ({ products }) => {
  console.log(products);

  return (
    <div>Products</div>
  );
};

async function getProducts() {
    try {
      const res = await fetch(`${process.env.HOSTADRESS}/api/products/list`);
      if (!res.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  

export async function getServerSideProps() {
  const products = await getProducts();

  // Pass data to the page via props
  return { props: { products } };
}

export default Products;
