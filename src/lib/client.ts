import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(
    // contents:()=>{}
  ),
});

export default client;