const Router = require('express').Router()
const BeanRouter = require('./BeanRouter')
const RoasterRouter = require('./RoasterRouter')

Router.use('/beans', BeanRouter)
Router.use('/roasters', RoasterRouter)

module.exports = Router
