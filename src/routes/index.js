const newsRouter = require('./news.route')
const userRouter = require('./user.route')
const loginRouter = require('./login.route')
const siteRouter = require('./site.route')

function route(app) {
  app.use('/news', newsRouter)
  app.use('/user', userRouter)
  app.use('/login', loginRouter)
  app.use('/', siteRouter)
}

module.exports = route;
