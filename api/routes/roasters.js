const Router = require('express').Router()
const RoasterController = require('../controllers/RoasterController')

Router.get('/roasters', RoasterController.get)
Router.get('/roasters', RoasterController.getOne)

module.exports = Router
