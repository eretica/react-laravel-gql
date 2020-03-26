import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import {paths} from "./const/paths";
import styled from "styled-components";

const Home = lazy(() => import('./components/pages/Home'));
const CategoryMaster = lazy(() => import('./components/pages/CategoryMaster'));
const ReduxExample = lazy(() => import('./components/pages/ReduxExample'));

const App = () => {
  return (
    <div className="App">
      <header className="App-header" />

      <Wrapper>
        <Header>header</Header>
        <Main>
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
        </Main>
        <Footer>footer</Footer>
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 20px 1fr 20px;
  background-color: #dce5e8;
`

const Header = styled.div`
grid-column: 1;
background-color: gray;
`

const Main = styled.div`
grid-column: 1;
padding: 0 10px;

`

const Footer = styled.div`
grid-column: 1;
background-color: gray;
`
