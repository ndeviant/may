import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

import Route from './Route';

const Home = loadable(() =>
  import(/* webpackChunkName: "Home" */ 'views/Home'),
);

const NotFound = loadable(() =>
  import(/* webpackChunkName: "NotFound" */ 'views/NotFound'),
);

const Blog = loadable(() =>
  import(/* webpackChunkName: "Blog" */ 'views/Blog'),
);

export const routes = [
  { path: '/', exact: true, component: Home },
  {
    path: '/blog',
    exact: true,
    component: Blog,
  },
  {
    component: NotFound,
  },
];

const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => {
          return <Route key={route.path ?? '*'} {...route} />;
        })}
      </Switch>
    </Router>
  );
};

export default Routes;
