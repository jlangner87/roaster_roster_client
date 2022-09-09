const Router = require('express').Router()
const controller = require('../controllers/RetailerController')

Router.get('/all', controller.GetRetailers)

module.exports = Router
