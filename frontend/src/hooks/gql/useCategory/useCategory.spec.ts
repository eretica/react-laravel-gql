// import * as useCategory from "./useCategory";
import {easyGraphQLTester} from "../../../graphql/index.spec";

describe('test for userCategory', () => {
  /** @ts-ignore **/
  const spy = require('./useCategory')
  console.log(spy)
  const schema = spy.__get__('FETCH')
  console.log(schema)


  // easyGraphQLTester.test(spy)
})
