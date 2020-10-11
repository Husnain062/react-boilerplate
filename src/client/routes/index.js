/* eslint-disable global-require */
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'home' */ '../pages/home'),
    },
    {
      path: '/registration',
      load: () =>
        import(/* webpackChunkName: 'not-found' */ '../pages/registration'),
    },
    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () =>
        import(/* webpackChunkName: 'not-found' */ '../pages/not-found'),
    },
  ],

  async action({ next }) {
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Home'} - Looking4`;
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('../pages/error').default,
  });
}

export default routes;
