import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import {paths} from "./const/paths";

const Home = lazy(() => import('./components/pages/Home'));
const CategoryMaster = lazy(() => import('./components/pages/CategoryMaster'));
const ReduxExample = lazy(() => import('./components/pages/ReduxExample'));

const App = () => {
  return (
    <div className="App" style={{margin: '10px'}}>
      <header className="App-header">
        <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            <Route exact path={paths.home} component={Home} />
            <Route exact path={paths.reduxExample} component={ReduxExample} />
            <Route exact path={paths.gqlExample} component={CategoryMaster} />
            <Redirect to={paths.home} />
          </Switch>
        </BrowserRouter>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
