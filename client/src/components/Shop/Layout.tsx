import React, { useState, useEffect } from "react";
import Card from "@/components/Shop/Card/Card";
import Menu from "../GlobalComponents/Menu/Menu";
import AddressBar from "../GlobalComponents/AddressBar/AddressBar";
import NavIcons from "../GlobalComponents/Menu/Phone/NavIcons";
import Spacing from "../GlobalComponents/Spacing/Spacing";
import { CiFilter } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";

const initialCheckboxes = {
  cap: false,
  clothes: false,
  pants: false,
  woman: false,
  man: false,
  child: false,
};

interface ShopComponentProps {
  data: any[] | undefined;
}

const ShopComponent: React.FC<ShopComponentProps> = ({ data }) => {
  const [products, setProducts] = useState<any[]>(data || []);
  const [filteredProducts, setFilteredProducts] = useState<any[]>(data || []);
  const [state, setState] = useState(initialCheckboxes);

  useEffect(() => {
    let updatedProducts = products;

    if (state.cap) {
      updatedProducts = updatedProducts.filter((item) =>
        item.pTitle.includes("کلاه")
      );
    }

    if (state.clothes) {
      updatedProducts = updatedProducts.filter((item) =>
        item.pTitle.includes("لباس")
      );
    }

    if (state.pants) {
      updatedProducts = updatedProducts.filter((item) =>
        item.pTitle.includes("شلوار")
      );
    }

    if (state.woman) {
      updatedProducts = updatedProducts.filter((item) => item.pType == 2);
    }
    if (state.man) {
      updatedProducts = updatedProducts.filter((item) => item.pType == 1);
    }
    if (state.child) {
      updatedProducts = updatedProducts.filter((item) => item.pType == 3);
    }

    setFilteredProducts(updatedProducts);
  }, [state, products]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialData = await fetchingProducts();
        setProducts(initialData);
      } catch (error) {
        console.log(error);
      }
    };

    // Set interval to fetch data every 10 seconds
    const interval = setInterval(fetchData, 10000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <>
      <Menu />
      <AddressBar
        dataAddress={[
          { title: "خانه", router: "/" },
          { title: "فروشگاه", router: "#" },
        ]}
      />
      <Spacing>
        <div className="w-100 relative h-auto flex mt-2 flex-wrap-reverse ">
          <div
            className="w-[100%] md:w-80 
          h-auto flex flex-row  flex-wrap
          
          md:justify-end justify-end"
          >
            {filteredProducts.length === 0 ? (
              <p>Not found</p>
            ) : (
              filteredProducts.map((item: any, index: number) => (
                <Card key={index} data={item} />
              ))
            )}
          </div>

          {/* Filters Part */}

          <div
            className="
            absolute
            top-0
            right-0
            w-[100%] h-[auto]
            md:w-[20%]
           hidden
            md:flex md:h-[500px]
            
              flex-col
           bg-[#f9f9f9] rounded-md px-4 py-4"
            style={{ direction: "rtl" }}
          >
            <div className="flex justify-between items-center">
              <p className="font-[yekanBakhtBold] text-[25px]">فیلترها</p>
              <CiFilter className="text-[28px]" />
            </div>

            <p className="font-[yekanBakht] text-[20px]">برحسب نوع کالا</p>
            <label htmlFor="cap" className="flex w-100 h-[auto]  items-center">
              <input
                type="checkbox"
                onChange={handleChange}
                name="cap"
                checked={state.cap}
              />
              <p className="font-[yekanBakht] text-[18px] mr-1 mt-1">کلاه</p>
            </label>
            <label
              htmlFor="clothes"
              className="flex w-100 h-[auto]  items-center"
            >
              <input
                type="checkbox"
                onChange={handleChange}
                name="clothes"
                checked={state.clothes}
              />
              <p className="font-[yekanBakht] text-[18px] mr-1 mt-1">لباس</p>
            </label>
            <label
              htmlFor="pants"
              className="flex w-100 h-[auto]  items-center"
            >
              <input
                type="checkbox"
                onChange={handleChange}
                name="pants"
                checked={state.pants}
              />
              <p className="font-[yekanBakht] text-[18px] mr-1 mt-1">شلوار</p>
            </label>

            <p className="font-[yekanBakht] text-[20px]">برحسب نوع جنسیت</p>
            <label
              htmlFor="woman"
              className="flex w-100 h-[auto]  items-center"
            >
              <input
                type="checkbox"
                onChange={handleChange}
                name="woman"
                checked={state.woman}
              />
              <p className="font-[yekanBakht] text-[18px] mr-1 mt-1">زنانه</p>
            </label>

            <label htmlFor="man" className="flex w-100 h-[auto]  items-center">
              <input
                type="checkbox"
                onChange={handleChange}
                name="man"
                checked={state.man}
              />
              <p className="font-[yekanBakht] text-[18px] mr-1 mt-1">مردانه</p>
            </label>

            <label
              htmlFor="child"
              className="flex w-100 h-[auto]  items-center"
            >
              <input
                type="checkbox"
                onChange={handleChange}
                name="child"
                checked={state.child}
              />
              <p className="font-[yekanBakht] text-[18px] mr-1 mt-1">
                بچه گانه
              </p>
            </label>
          </div>
        </div>
      </Spacing>
      <NavIcons />
    </>
  );
};

async function fetchingProducts() {
  try {
    const res = await fetch(`/api/product/list`, {
      method: "GET",
      headers: {
        headerLock: `${process.env.NEXT_PUBLIC_VALID_API_KEY_PRODUCT}`,
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

export default ShopComponent;
