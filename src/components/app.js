import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Catalogue from '../containers/catalogue';
import DetailedView from '../containers/detailedView';

const app = () => (
  <Router>
    <div>
      <div className="title">
        <h1>Pokemons!</h1>
      </div>
      <div className="switch">
        <Switch>
          <Route exact path="/">
            {' '}
            <Catalogue />
            {' '}
          </Route>
          <Route path="/pokemon/:name">
            {' '}
            <DetailedView />
            {' '}
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
);

export default app;
