const Router = require('express').Router()
const controller = require('../controllers/BeanController')

Router.get('/all', controller.GetBeans)
Router.get('/:beans_id', controller.GetOneBean)
Router.post('/add', controller.PostBean)
Router.delete('/:beans_id', controller.DeleteBean)
Router.patch('/:beans_id', controller.PatchBean)

module.exports = Router
