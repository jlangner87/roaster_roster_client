const Router = require('express').Router()
const BeanController = require('../controllers/BeanController')

Router.get('/all', BeanController.getBeans)
Router.get('/:beans_id', BeanController.getOneBean)
Router.post('/new', BeanController.postBean)
Router.delete('/beans_id', BeanController.deleteBean)
Router.put('/:beans_id', BeanController.putBean)

module.exports = Router
