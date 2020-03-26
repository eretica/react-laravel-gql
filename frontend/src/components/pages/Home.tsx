import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {paths} from "../../const/paths";

const Home: FC = () => (
    <div>
      <ul>
        <li>
          <Link to={paths.reduxExample}>redux</Link>
        </li>
        <li>
          <Link to={paths.gqlExample}>gql</Link>
        </li>
      </ul>
    </div>
);

export default Home
