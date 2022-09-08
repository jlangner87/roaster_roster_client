const Router = require('express').Router()
const BeanRouter = require('./BeanRouter')

Router.use('/beans', BeanRouter)

module.exports = Router
