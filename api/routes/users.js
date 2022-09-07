const Router = require('express').Router()
const UserController = require('../controllers/UserController')

Router.get('/:users_id', UserController.getOneUser)
Router.post('/register', UserController.postUser)
Router.delete('/:users_id', UserController.deleteUser)
Router.put('/:users_id', UserController.putUser)

module.exports = Router
