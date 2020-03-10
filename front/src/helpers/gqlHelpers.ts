import {QueryLazyOptions, useLazyQuery, useQuery} from "@apollo/react-hooks";
import {QueryResult} from "@apollo/react-common";

const NetworkStatus = {
  loading: 1,
  setVariables: 2,
  fetchMore: 3,
  refetch: 4,
  poll: 6,
  ready: 7,
  error: 8
}

export const parseQuery = <T extends QueryResult>(query: T) => {
  const {networkStatus} = query

  console.log(networkStatus)
  return {
    ...query,
    loading: networkStatus === NetworkStatus.loading,
    refetching: networkStatus === NetworkStatus.refetch,
  }
}

type AddingStatus = {
  refetching: boolean
}

type DefaultLazyQuery = [(options?: QueryLazyOptions<any> | undefined) => void, QueryResult];
type CustomLazyQuery = [(options?: QueryLazyOptions<any> | undefined) => void, QueryResult & AddingStatus];

export const parseLazyQuery = <T extends DefaultLazyQuery>(query: T): CustomLazyQuery => {
  const {networkStatus} = query[1]

  return [
    query[0],
    {
      ...query[1],
      loading: networkStatus === NetworkStatus.loading,
      refetching: networkStatus === NetworkStatus.refetch,
    }
  ]
}
