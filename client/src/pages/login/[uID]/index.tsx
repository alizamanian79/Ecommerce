import Dashboard from "@/components/Profile/Layout";
import { GetServerSideProps } from "next";
import { decodeJwt } from "../../../../utils/jwt/decodeJwt";
import { useRouter } from "next/router";
type Props = {
  data: any;
};

const Profile = ({ data }: Props) => {
  return (
    <>
      <Dashboard data={data} />
    </>
  );
};

async function getInformation(id: string) {  
  try {  
    const data = decodeJwt(id);  
    return data;  
  } catch (error) {  
    console.error("Error fetching data:", error);  
    return null;  
  }  
}  

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {  
  const { params } = context;  
  const id = params?.uID as string;  
  const data = await getInformation(id);  
  
  // Redirect to login if data is not found  
  if (!data) {  
    return {  
      redirect: {  
        destination: '/login',  
        permanent: false, // Set to true if this redirect should be cached  
      },  
    };  
  }  
  
  return {  
    props: {  
      data,  
    },  
  };  
};
export default Profile;
