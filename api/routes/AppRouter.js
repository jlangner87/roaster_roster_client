const Router = require('express').Router()
const BeanRouter = require('./BeansRouter')
const RoasterRouter = require('./RoastersRouter')
const UserRouter = require('./UserRouter')

Router.use('/beans', BeanRouter)
Router.use('/roasters', RoasterRouter)
Router.use('/users', UserRouter)

module.exports = Router
