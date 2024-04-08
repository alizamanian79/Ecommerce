import  PageProductComponent from "@/components/ProductPage/Layout"
import { GetServerSideProps } from 'next';

type Props = {
  id: string;
};

const Page = ({ id }: Props) => {
  return (
    <PageProductComponent param={id}/>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { params } = context;
  const id = params?.pID as string;

  return {
    props: {
      id,
    },
  };
};

export default Page;
