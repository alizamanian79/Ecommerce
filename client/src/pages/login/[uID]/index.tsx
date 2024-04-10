import Dashboard from "@/components/Profile/Layout";
import { GetServerSideProps } from "next";

type Props = {
  id: string;
};

const Profile = ({ id }: Props) => {
  return <Dashboard param={id} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { params } = context;
  const id = params?.uID as string;

  return {
    props: {
      id,
    },
  };
};

export default Profile;
