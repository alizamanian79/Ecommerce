import { GetServerSideProps } from 'next';
import React, { useState, useEffect } from 'react';



interface Datas {
  listData: any[];
  domain: string;
}

const UserPages: React.FC<Datas> = ({ listData, domain }) => {

const [data, setData] = useState(listData)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchData();
        setData(data)
        console.log(data)
      } catch (error) {
        console.error('Error fetching seller data:', error);
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
            <label htmlFor="" onClick={()=>handleCopy(item.sID)}>sID: {item.sID}</label>
            <label htmlFor="" onClick={()=>handleCopy(item.sCode)}>sCode: {item.sCode}</label>
            <label htmlFor="" onClick={()=>handleCopy(item.uID)}>userID: {item.uID}</label>
            <label htmlFor="" onClick={()=>handleCopy(item.uName)}>owner: {item.uName} - {item.uLastName}</label>
            <label htmlFor="" onClick={()=>handleCopy(item.uAddress)}>Address: {item.uAddress}</label>
          </div>
          <br/>
          </>
        ))
      )
      
      }
      
    </>
  );
};

async function fetchData() {
  try {
    const res = await fetch(`http://localhost:3000/api/seller/list`, {
      method: 'GET',
      headers: {
        'headerLock': `${process.env.NEXT_PUBLIC_VALID_API_KEY_SELLER}`
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
    const listData = await fetchData();
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
