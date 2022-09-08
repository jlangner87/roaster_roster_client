const Router = require('express').Router()
const controller = require('../controllers/BeanController')

Router.get('/all', controller.GetBeans)
Router.get('/:beans_id', controller.GetOneBean)
Router.post('/add', controller.PostBean)
Router.delete('/:id', controller.DeleteBean)

module.exports = Router
