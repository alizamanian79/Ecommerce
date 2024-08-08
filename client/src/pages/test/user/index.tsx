import { GetServerSideProps } from 'next';
import React, { useState, useEffect } from 'react';

interface User {
  uID:string;
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

const [data, setData] = useState(listData)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await userData();
        setData(data)
        // console.log(data)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);


  const handleCopy =(item:string)=>{
    navigator.clipboard.writeText(item)
    alert(`${item} copied in yout clipboard`)
  }

  return (
    <>
      <div>UserPages {domain}</div>
      {data &&
      (
        data.map((item, index) => (
          <>
          <br/>
          <div key={item.uID} className='flex flex-col'>
            <label htmlFor="" onClick={()=>handleCopy(item.uName)}>Name: {item.uName}</label>
            <label htmlFor="" onClick={()=>handleCopy(item.uLastName)}>lastName: {item.uLastName}</label>
            <label htmlFor="" onClick={()=>handleCopy(item.uPhone)}>Phone: {item.uPhone}</label>
            <label htmlFor="" onClick={()=>handleCopy(item.uPassword)}>Password: {item.uPassword}</label>
          </div>
          <br/>
          </>
        ))
      )
      
      }
      
    </>
  );
};

async function userData() {
  try {
    const res = await fetch(`http://localhost:3000/api/user/list`, {
      method: 'GET',
      headers: {
        'headerLock': `${process.env.NEXT_PUBLIC_VALID_API_KEY_USER}`
      }
    });

    const data = await res.json();
    return data
  } catch (error) {
    console.error('Error fetching user data:', error);
    return [];
  }
}

export const getServerSideProps: GetServerSideProps = async () => {
 
  try {
    const listData = await userData();
    return {
      props: { listData },
    };
  } catch (error) {
    return {
      props: { listData: []}
    };
  }
};

export default UserPages;
