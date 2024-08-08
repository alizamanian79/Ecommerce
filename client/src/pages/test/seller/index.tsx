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
            'headerLock': `${process.env.NEXT_PUBLIC_VALID_API_KEY_SELLER}`, // Adjust header if necessary
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const fetchedData = await res.json();
        setData(fetchedData);
        console.log(fetchedData);
      } catch (error) {
        console.error('Error fetching seller data:', error);
      }
    };

    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
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
          <label htmlFor="" onClick={() => handleCopy(item.sID)}>sID: {item.sID}</label>
          <label htmlFor="" onClick={() => handleCopy(item.sCode)}>sCode: {item.sCode}</label>
          <label htmlFor="" onClick={() => handleCopy(item.uID)}>userID: {item.uID}</label>
          <label htmlFor="" onClick={() => handleCopy(item.uName)}>owner: {item.uName} - {item.uLastName}</label>
          <label htmlFor="" onClick={() => handleCopy(item.uAddress)}>Address: {item.uAddress}</label>
          <br />
        </div>
      ))}
    </>
  );
};

async function fetchData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/seller/list`, {
      method: 'GET',
      headers: {
        'headerLock': `${process.env.NEXT_PUBLIC_VALID_API_KEY_SELLER}`, // Adjust header if necessary
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching seller data:', error);
    return [];
  }
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const listData = await fetchData();
    return {
      props: { listData, domain: process.env.NEXT_PUBLIC_DOMAIN || '' },
    };
  } catch (error) {
    return {
      props: { listData: [], domain: process.env.NEXT_PUBLIC_DOMAIN || '' },
    };
  }
};

export default UserPages;
