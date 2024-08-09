import { GetServerSideProps } from 'next';  
import React, { useState, useEffect } from 'react';  

interface Seller {  
  sID: string;  
  sCode: string;  
  uID: string;  
  uName: string;  
  uLastName: string;  
  uAddress: string;  
}  

interface Datas {  
  listData: Seller[];  
  domain: string;  
}  

const UserPages: React.FC<Datas> = ({ listData, domain }) => {  
  const [data, setData] = useState<Seller[]>(listData);  

  useEffect(() => {  
    const fetchData = async () => {  
      try {  
        const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/seller/list`, {  
          method: 'GET',  
          headers: {  
            'headerLock': `${process.env.NEXT_PUBLIC_VALID_API_KEY_SELLER}`,  
          },  
        });  

        if (!res.ok) {  
          throw new Error(`HTTP error! status: ${res.status}`);  
        }  

        const fetchedData: Seller[] = await res.json();  
        setData(fetchedData);  
        console.log(fetchedData); // For debugging purposes  
      } catch (error) {  
        console.error('Error fetching seller data:', error);  
      }  
    };  

    fetchData(); // Initial fetch  
    const interval = setInterval(fetchData, 10000); // Refetch every 10 seconds  

    return () => clearInterval(interval); // Cleanup on component unmount  
  }, []); // Empty dependency array means this effect runs once on mount  

  const handleCopy = (item: string) => {  
    navigator.clipboard.writeText(item);  
    alert(`${item} copied to your clipboard`);  
  };  

  return (  
    <>  
      <div>UserPages {domain}</div>  
      {data && data.map((item) => (  
        <div key={item.sID} className='flex flex-col'>  
          <br />  
          <label onClick={() => handleCopy(item.sID)}>sID: {item.sID}</label>  
          <label onClick={() => handleCopy(item.sCode)}>sCode: {item.sCode}</label>  
          <label onClick={() => handleCopy(item.uID)}>userID: {item.uID}</label>  
          <label onClick={() => handleCopy(item.uName)}>Owner: {item.uName} {item.uLastName}</label>  
          <label onClick={() => handleCopy(item.uAddress)}>Address: {item.uAddress}</label>  
          <br />  
        </div>  
      ))}  
    </>  
  );  
};  

async function fetchSellerData() {  
  try {  
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/seller/list`, {  
      method: 'GET',  
      headers: {  
        'headerLock': `${process.env.NEXT_PUBLIC_VALID_API_KEY_SELLER}`,  
      },  
    });  

    if (!res.ok) {  
      throw new Error(`HTTP error! status: ${res.status}`);  
    }  

    const data: Seller[] = await res.json();  
    return data;  
  } catch (error) {  
    console.error('Error fetching seller data:', error);  
    return [];  
  }  
}  

export const getServerSideProps: GetServerSideProps = async () => {  
  try {  
    const listData = await fetchSellerData(); // Call the refactored fetch function  
    return {  
      props: { listData, domain: process.env.NEXT_PUBLIC_DOMAIN || '' },  
    };  
  } catch (error) {  
    console.error('Error fetching seller data on server:', error);  
    return {  
      props: { listData: [], domain: process.env.NEXT_PUBLIC_DOMAIN || '' },  
    };  
  }  
};  

export default UserPages;