import {ApolloQueryResult, OperationVariables} from "apollo-client/core/types";
import {MutationOptions, QueryOptions} from "apollo-client/core/watchQueryOptions";
import {apolloClient} from "../../graphql";
import {DocumentNode} from "graphql";
import {FetchResult} from "apollo-link";

export const useQuery =
  <T = any, TVariables = OperationVariables>(query: DocumentNode, options?: Omit<QueryOptions<TVariables>, 'query'>): (variables: TVariables) => Promise<ApolloQueryResult<T>> => {
  // todo TVariablesに必須があるときだけ必須にしたい?
  return (variables: TVariables) => apolloClient.query({
    query,
    variables,
    ...options
  })
}

export const useMutation = <T = any, TVariables = OperationVariables>(mutation: DocumentNode, options?: Omit<MutationOptions<T, TVariables>, 'mutation'>): (variables: TVariables) => Promise<FetchResult<T>> => {
  return (variables: TVariables) => apolloClient.mutate({
      mutation,
      variables,
      ...options
    })
}
