const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const countryRoute = require('./country.route');
const regionRoute = require('./region.route');
const docsRoute = require('./docs.route');
// const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/countries',
    route: countryRoute,
  },
  {
    path: '/region',
    route: regionRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next this real code */
// if (config.env === 'development') {
//   devRoutes.forEach((route) => {
//     router.use(route.path, route.route);
//   });
// }
devRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
