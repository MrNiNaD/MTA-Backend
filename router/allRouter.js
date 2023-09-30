const AuthRoute = require('./auth.router')
const Birds2 = require('./birds2')

const configs = [
  { path: '/auth', routes: AuthRoute  },
  { path: '/birds', routes: Birds2  },
];

const loadAllRoutes = (app) => {
  configs.forEach((config) => {
    app.use(config.path, config.routes);
  })
}

module.exports = {
  loadAllRoutes
}