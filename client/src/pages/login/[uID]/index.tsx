import Dashboard from "@/components/Profile/Layout";
import { GetServerSideProps } from "next";

type Props = {
  data: any;
};

const Profile = ({ data }: Props) => {
  return (
    <>
      <Dashboard data={data[0]} />
    </>
  );
};

async function getInformation(id: string) {
  try {
    const res = await fetch(`${process.env.DOMAIN}/api/user/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    const jsonData = await res.json(); // Correctly parsing the JSON data from the response body
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { params } = context;
  const id = params?.uID as string;
  const data = await getInformation(id);
  return {
    props: {
      data,
    },
  };
};

export default Profile;
