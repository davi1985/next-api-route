import type { NextPage } from "next";
import { UsersProps } from "../@types/types";

import { PageTemplate } from "../components/PageTemplate";
import { Users } from "../components/User";
import api from "../services/api";

const Home: NextPage<UsersProps> = ({ users }: UsersProps) => {
  return (
    <PageTemplate title="API Routes Demo">
      <Users users={users} />
    </PageTemplate>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const users = await api.getAllUser();

  return {
    props: { users },
  };
};
