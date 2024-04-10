import React, { useState, useEffect } from "react";
import axios from "axios";

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
  return <>
  {handleLoad(param)}
  {param}
  </>;
};

export default Layout;
