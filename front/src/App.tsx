import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import {CategoryMaster} from './components/pages/CategoryMaster';
import {paths} from "./const/paths";
import {Home} from "./components/pages/Home";
import {ReduxExample} from "./components/pages/ReduxExample";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Route exact path={paths.home} component={Home} />
          <Route exact path={paths.reduxExample} component={ReduxExample} />
          <Route exact path={paths.gqlExample} component={CategoryMaster} />
          <Redirect to={paths.home} />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
