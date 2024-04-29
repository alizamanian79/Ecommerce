import Card from "@/components/Shop/Card/Card";
import React, { useEffect, useState } from "react";
import ConvertBuffer from "@/components/GlobalComponents/Buffer/ConvertBuffer/ConvertBuffer";


interface PRODUCTSIF {
  products: any;
  sellers: any;
}

interface FormData {
  pSellerID?: string;
  pTitle: string;
  pDescription: string;
  pIntroduce: string;
  pMaterial?: any;
  pSize: string;
  pColor:string,
  pCategori: string;
  pImages: string[];
  pSeason: string;
  pTotal: string;
  pPrice: string;
}


const Products: React.FC = () => {
  const [data, setData] = useState([]);
  const [seller, setSellersData] = useState([]);
  const [selectedOptionSeller, setSelectedOptionSeller] = useState<string>("");
  const [images, setimages] = useState<string>("");

  const getProducts = async () => {
    const res = await fetch(`${process.env.LOCALHOST}/api/products/list`);
    const data = await res.json();
    setData(data);
  };

  const getSellers = async () => {
    const res = await fetch(`${process.env.LOCALHOST}/api/sellers/list`);
    const data = await res.json();
    setSellersData(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getProducts();
      await getSellers();
    };
    fetchData();

    const interval = setInterval(fetchData, 5000); // Fetch data every 15 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);


  const handleCallbackImages = (data: string) => {
    setimages(data);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionSeller(e.target.value);
  };

  const [formData, setFormData] = useState<FormData>({
    pTitle: "",
    pDescription: "",
    pIntroduce: "",
    pMaterial: "",
    pSize: "",
    pColor:"",
    pCategori: "",
    pImages: [],
    pSeason: "",
    pTotal: "",
    pPrice: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    var mater = [];
  mater.push(formData.pMaterial)
    
    setFormData({
      ...formData,
      pSellerID: selectedOptionSeller,
      pMaterial: mater,
    });
    handleAddProduct();
  };

  const handleAddProduct = () => {
    const mater =[]
    mater.push(formData.pMaterial);


  

  const data ={
    "pSellerID":selectedOptionSeller,
    "pTitle":formData.pTitle,
    "pDescription":formData.pDescription,
    "pIntroduce":formData.pIntroduce,
    "pMaterial":mater,
    "pSize":formData.pSize,
    "pColor":formData.pColor,
    "pCategori":formData.pCategori,
    "pImages":images,
    "pSeason":formData.pSeason,
    "pTotal":formData.pTotal,
    "pPrice":formData.pPrice}

    fetch("http://localhost:9091/api/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        alert("Item added successfuly");
        return response.json();
      })
      .then((data) => {
        alert("added");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
     
      <div className="w-100 h-auto flex flex-wrap">
        {data.map((item: any, index: number) => {
          return <Card key={index} data={item} />;
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Product Title:
          <input
            type="text"
            name="pTitle"
            value={formData.pTitle}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product Description:
          <input
            type="text"
            name="pDescription"
            value={formData.pDescription}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product Introduction:
          <input
            type="text"
            name="pIntroduce"
            value={formData.pIntroduce}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product Material:
          <input
            type="text"
            name="pMaterial"
            value={formData.pMaterial}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product Size:
          <input
            type="text"
            name="pSize"
            value={formData.pSize}
            onChange={handleChange}
          />
        </label>
        <br />


        <label>
          Product Color:
          <input
            type="text"
            name="pColor"
            value={formData.pColor}
            onChange={handleChange}
          />
        </label>
<br />
        <label>
          Product Category:
          <input
            type="text"
            name="pCategori"
            value={formData.pCategori}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product Season:
          <input
            type="text"
            name="pSeason"
            value={formData.pSeason}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product Total:
          <input
            type="text"
            name="pTotal"
            value={formData.pTotal}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Product Price:
          <input
            type="text"
            name="pPrice"
            value={formData.pPrice}
            onChange={handleChange}
          />
        </label>
        <br />

        <label htmlFor="selectOption">Select a seller:</label>
      <select
        id="selectOption"
        value={selectedOptionSeller}
        onChange={handleSelectChange}
      >
        <option value="">Select...</option>
        {seller.map((seller: any) => (
          <option key={seller.sID} value={seller.sID}>
            {seller.sName}
          </option>
        ))}
      </select>

        <br />

        <ConvertBuffer imagesNumber={2} handleCallback={handleCallbackImages} />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

// async function getProducts() {
//   try {
//     const res = await fetch(`${process.env.LOCALHOST}/api/products/list`, {
//       next: { revalidate: 10 },
//     });
//     if (!res.ok) {
//       throw new Error("Failed to fetch products");
//     }
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }
// async function getSellers() {
//   try {
//     const res = await fetch(`${process.env.LOCALHOST}/api/sellers/list`);
//     if (!res.ok) {
//       throw new Error("Failed to fetch products");
//     }
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }

// export async function getServerSideProps() {
//   const products = await getProducts();
//   const sellers = await getSellers();
//   // Pass data to the page via props
//   return { props: { products, sellers } };
// }

export default Products;
