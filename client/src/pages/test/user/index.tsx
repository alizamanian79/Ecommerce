import { GetServerSideProps } from 'next';  
import React, { useState, useEffect } from 'react';  

interface User {  
  uID: string;  
  uName: string;  
  uLastName: string;  
  uPhone: string;  
  uPassword: string;  
  uGmail: string;  
}  

interface Datas {  
  listData: User[];  
  domain: string;  
}  

const UserPages: React.FC<Datas> = ({ listData, domain }) => {  
  const [data, setData] = useState<User[]>(listData);  

  useEffect(() => {  
    const fetchData = async () => {  
      try {  
        const response = await fetch(`/api/user/list`, {  
          method: "GET",  
          headers: {  
            "Content-Type": "application/json",  
            headerLock: `${process.env.NEXT_PUBLIC_VALID_API_KEY_USER}`,  
          }  
        });  

        if (!response.ok) {  
          throw new Error(`HTTP error! status: ${response.status}`);  
        }  

        const fetchedData: User[] = await response.json();  
        setData(fetchedData);  
      } catch (error) {  
        console.error('Error fetching user data:', error);  
      }  
    };  

    fetchData(); // Initial fetch  
    const interval = setInterval(fetchData, 10000);  

    return () => clearInterval(interval);  
  }, []);  

  const handleCopy = (item: string) => {  
    navigator.clipboard.writeText(item);  
    alert(`${item} copied to your clipboard`);  
  };  

  return (  
    <>  
      <div>UserPages {domain}</div>  
      {data && data.map((item) => (  
        <div key={item.uID} className='flex flex-col'>  
          <br />  
          <label htmlFor="" onClick={() => handleCopy(item.uName)}>Name: {item.uName}</label>  
          <label htmlFor="" onClick={() => handleCopy(item.uLastName)}>LastName: {item.uLastName}</label>  
          <label htmlFor="" onClick={() => handleCopy(item.uPhone)}>Phone: {item.uPhone}</label>  
          <label htmlFor="" onClick={() => handleCopy(item.uPassword)}>Password: {item.uPassword}</label>  
          <br />  
        </div>  
      ))}  
    </>  
  );  
};  

async function userData() {  
  try {  
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/user/list`, {  
      method: 'GET',  
      headers: {  
        'headerLock': `${process.env.NEXT_PUBLIC_VALID_API_KEY_USER}` // Adjust if necessary  
      }  
    });  

    if (!res.ok) {  
      throw new Error(`HTTP error! status: ${res.status}`);  
    }  

    const data = await res.json();  
    return data;  
  } catch (error) {  
    console.error('Error fetching user data:', error);  
    return [];  
  }  
}  

export const getServerSideProps: GetServerSideProps = async () => {  
  try {  
    const listData = await userData();  
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