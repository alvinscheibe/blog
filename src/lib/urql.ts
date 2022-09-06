import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql';

const isServerSide = typeof window === 'undefined';
const ssrCache = ssrExchange({
  isClient: !isServerSide
});

const client = createClient({
  url: process.env.NEXT_PUBLIC_API_ENVIRONMENT_GRAPHQL as string,
  exchanges: [
    dedupExchange, cacheExchange, ssrCache, fetchExchange
  ]
});

export { client, ssrCache };