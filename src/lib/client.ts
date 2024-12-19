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
  JSON.parse( localStorage.getItem('affiliations') || '[]' )
);

affiliationsVar.onNextChange(newValue => {
  localStorage.setItem('affiliations', JSON.stringify(newValue));
});

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_REACT_APP_GRAPHQL_ENDPOINT,
  cache,
});


export default client;