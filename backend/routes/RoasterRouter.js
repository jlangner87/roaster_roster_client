const Router = require('express').Router()
const controller = require('../controllers/RoasterController')

Router.get('/all', controller.GetRoasters)

module.exports = Router
