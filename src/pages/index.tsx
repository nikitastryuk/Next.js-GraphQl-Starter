import type { NextPage } from 'next';
import { useQuery } from 'urql';

import { client, ssrCache } from 'src/graphql/urqlClient';

const WeatherQuery = `
query GetUsersQuery {
  users {
    name
    email
  }
}
`;

const Home: NextPage = () => {
  const [result] = useQuery({
    query: WeatherQuery,
  });
  const { data, fetching, error } = result;

  if (fetching) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default Home;
