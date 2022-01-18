import { cacheExchange } from '@urql/exchange-graphcache';
import { createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql';

const isServerSide = typeof window === 'undefined';

export const ssrCache = ssrExchange({ isClient: !isServerSide });

export const client = createClient({
  url: 'http://localhost:3000/api/graphql',
  exchanges: [dedupExchange, cacheExchange(), ssrCache, fetchExchange],
  fetchOptions: () => {
    return { headers: {} };
  },
});
