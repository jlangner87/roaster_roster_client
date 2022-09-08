const Router = require('express').Router()
const BeanRouter = require('./BeanRouter')

Router.use('/beans', BeanRouter)
Router.use('/add', BeanRouter)

module.exports = Router
