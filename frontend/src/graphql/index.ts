import ApolloClient from 'apollo-boost';

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:10080/graphql',

})

apolloClient.defaultOptions = {
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: "none",
  },
  mutate: {
    fetchPolicy: 'no-cache',
    errorPolicy: "none",
  },
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: "none",
  }
}
