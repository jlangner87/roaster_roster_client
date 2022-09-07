const Router = require('express').Router()
const BeanController = require('../controllers/BeanController')

Router.get('/beans', BeanController.getBeans)
Router.get('/beans/:id', BeanController.getOneBean)

module.exports = Router
