import { matchPath } from 'react-router';

import { routes } from './Routes';

function findRoute(path) {
  const matchingRoute = routes.find((route) => {
    return matchPath(path, {
      path: route.path,
      exact: route.exact,
    });
  });

  if (matchingRoute && matchingRoute.routes) {
    return findRoute(path, matchingRoute.routes);
  }

  return matchingRoute;
}

export function preloadRouteComponent(to) {
  const path = typeof to === 'string' ? to : to.pathname;

  const matchingRoute = findRoute(path);

  if (matchingRoute && matchingRoute.component.preload) {
    matchingRoute.component.preload();
  }
}
