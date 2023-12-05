import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.archireport.dev',
  cache: new InMemoryCache(),
});

export default client;
