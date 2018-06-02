const routes = require('next-routes')();

routes
  .add('/patients/new', '/patients/new')
  .add('/patients/:address', '/patients/show')
  .add('/patients/:address/requests', '/patients/requests/index')
  .add('/patients/:address/requests/new', '/patients/requests/new');

module.exports = routes;
