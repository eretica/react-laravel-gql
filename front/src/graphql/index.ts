import ApolloClient from 'apollo-boost';

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:10080/graphql',

})

apolloClient.defaultOptions = {
  query: {
    fetchPolicy: 'network-only'
  },
  mutate: {
    fetchPolicy: 'network-only'
  },
  watchQuery: {
    fetchPolicy: 'network-only'
  }
}
