import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        affiliations: {
          read() {
            return affiliationsVar();
          }
        }
      }
    }
  }
});

export const affiliationsVar = makeVar(
  JSON.parse( localStorage.getItem('affiliations') || '[1,2,3,4,5]' )
);

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_REACT_APP_GRAPHQL_ENDPOINT,
  cache,
});


export default client;