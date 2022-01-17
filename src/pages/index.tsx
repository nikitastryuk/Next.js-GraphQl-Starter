import type { NextPage } from 'next';

import { useGetUsersQuery } from '../client/graphql/getUsers.generated';

const Home: NextPage = () => {
  const [result] = useGetUsersQuery();
  const { data, fetching, error } = result;

  if (fetching) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default Home;
