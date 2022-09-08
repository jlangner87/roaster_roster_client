const Router = require('express').Router()
const controller = require('../controllers/BeanController')

Router.get('/all', controller.GetBeans)
Router.get('/id', controller.GetOneBean)
Router.post('/add', controller.PostBean)

module.exports = Router
