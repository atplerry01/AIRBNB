import { ApolloClient, InMemoryCache, split } from 'apollo-client-preset';
import { createUploadLink } from 'apollo-upload-client';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

const httpLink = createUploadLink({
  uri: process.env.REACT_APP_SERVER_URL,
  credentials: 'include'
});

// create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://localhost:8080/`,
  options: {
    reconnect: true
  }
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query) as any;
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);


export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});
