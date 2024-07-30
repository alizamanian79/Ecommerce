import { GetServerSideProps } from 'next';
import React, { useState, useEffect } from 'react';

interface User {
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
        const res = await fetch(`${domain}/api/user/list`, {
          method: 'GET',
          headers: {
            'headerLock': `${process.env.VALID_API_KEY}`
          }
        });
        const data = await res.json();
        setData(data)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>UserPages {domain}</div>
      {data.map((item, index) => (
        <div key={index}>{item.uName} - {item.uLastName}</div>
      ))}
    </>
  );
};

async function userData(domain: string) {
  try {
    const res = await fetch(`${domain}/api/user/list`, {
      method: 'GET',
      headers: {
        'headerLock': `${process.env.VALID_API_KEY_USER}`
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
  const domain = 'http://localhost:3000';
  try {
    const listData = await userData(domain);
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
