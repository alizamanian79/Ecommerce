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
  const [data, setData] = useState<User[]>(listData);

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch('/api/user/list');
      const newData = await res.json();
      setData(newData);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>UserPages {domain}</div>
      {data.map((item, index) => (
        <div key={index}>{item.uName}-{item.uLastName}</div>
      ))}
    </>
  );
};

async function userData(domain: string) {
  try {
    const res = await fetch(`${domain}/api/user/list`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export const getServerSideProps: GetServerSideProps = async () => {
  const domain = process.env.DOMAIN == undefined?'http://localhost:3000':process.env.DOMAIN; // Default to localhost if DOMAIN is not defined
  const listData = await userData(domain);
  return {
    props: { listData, domain },
  };
};

export default UserPages;
