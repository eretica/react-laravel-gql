import ApolloClient from 'apollo-boost';

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:10080/graphql',

})

apolloClient.defaultOptions = {
  query: {
    fetchPolicy: 'no-cache'
  },
  mutate: {
    fetchPolicy: 'no-cache'
  },
  watchQuery: {
    fetchPolicy: 'no-cache'
  }
}
