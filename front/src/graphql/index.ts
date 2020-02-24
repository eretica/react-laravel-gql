import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import axios from "axios";
import { HttpLink, createHttpLink } from 'apollo-link-http';


const link = createHttpLink({
  uri: 'http://localhost:10080/graphql',
  credentials: 'same-origin',
  fetchOptions: {
    mode: 'no-cors',
  }
});

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:10080/graphql',
  // @ts-ignore
  // link,
  // uri: 'https://google.com',
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
  // headers: {
  //
  // },
  // credentials: 'same-origin'
  // fetchOptions: {
  //   // @ts-ignore
  //   mode: 'no-cors',
  //
  // },
  // link: new HttpLink({uri: "http://localhost:10080/graphql"}),
  // fetchOptions: {
  //   uri: 'http://localhost:10080/graphql'
  // },
  // @ts-ignore
  // connectToDevTools: true
})

export const getCategory = () => {
  // axios.post('http://localhost:10080/graphql')
  return 'a'
}
// export const getCategory = () => apolloClient
//   .query({
//     query: gql`
//       {
//         categories {
//           paginatorInfo {
//             total
//           }
//           data {
//             name
//           }
//         }
//       }
//     `
//   })
//   .then((result: any) => console.log(result));
