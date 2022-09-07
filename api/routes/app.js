const Router = require('express').Router()
const BeanRouter = require('./beans')
const RoasterRouter = require('./roasters')
const UserRouter = require('./users')

Router.use('/beans', BeanRouter)
// Router.use('/roasters', RoasterRouter)
// Router.use('/users', UserRouter)

module.exports = Router
