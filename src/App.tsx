import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Page404 from './views/404';
import Details from './views/details';
import Home from './views/home';

const App = () => (
  <Router>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/details/:id" component={Details} />
      <Route component={Page404} />
    </Switch>
  </Router>
);

export default App;