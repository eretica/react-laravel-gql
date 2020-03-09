import {gql} from "apollo-boost";
import {useMutation, useQuery} from "@apollo/react-hooks";

const FETCH = gql`
      {
        categories {
          paginatorInfo {
            total
          }
          data {
            id
            name
          }
        }
      }
    `

const CREATE = gql`
  mutation CreateCategory($name: String!) {
    createCategory(name: $name) {
        id
        name
    }
  }
`

const UPDATE = gql`
  mutation removeCategory($id: ID!, $name: String!) {
    updateCategory(id: $id, name: $name) {
      name
      id
    }
  }
`;

const REMOVE = gql`
  mutation removeCategory($id: ID!) {
    removeCategory(id: $id) {
      id
    }
  }
`;

type Paginate<T> = {
  paginatorInfo: {
    page: number
  }
  data: T[]
}

export const useCategory = () => {
    const fetch = useQuery<{
      categories: Paginate<Category>
    }>(FETCH, {
        notifyOnNetworkStatusChange: true
    });
    const create = useMutation<Category, {name: string}>(CREATE);
    const update = useMutation<Category, {id: string, name: string}>(UPDATE);
    const remove = useMutation<Category, {id: string}>(REMOVE);

    return {
        fetch,
        create,
        update,
        remove,
    }
}