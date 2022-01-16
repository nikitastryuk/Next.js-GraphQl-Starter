import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from 'urql';

const isServerSide = typeof window === 'undefined';

export const ssrCache = ssrExchange({ isClient: !isServerSide });

export const client = createClient({
  url: 'https://graphql-weather-api.herokuapp.com/',
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  fetchOptions: () => {
    return { headers: {} };
  },
});
