import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.archireport.dev/graphql/',
  cache: new InMemoryCache(),
  credentials: 'include',
});

export default client;
