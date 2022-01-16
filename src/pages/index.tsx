import type { NextPage } from 'next';
import { useQuery } from 'urql';

import { client, ssrCache } from 'src/urqlClient';

const WeatherQuery = `
query TorontoWeather($city: String!) {
  getCityByName(name: $city) {
    id
    name
    weather {
      summary {
        title
        description
      }
      temperature {
        min
        max
        actual
      }
    }
  }
}
`;

const Home: NextPage = () => {
  const [result] = useQuery({
    query: WeatherQuery,
    variables: { city: 'Toronto' },
  });
  const { data, fetching, error } = result;

  if (fetching) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export async function getStaticProps() {
  await client.query(WeatherQuery, { city: 'Toronto' }).toPromise();
  return { props: { urqlState: ssrCache.extractData() }, revalidate: 60 };
}

export default Home;
