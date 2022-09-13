const Router = require('express').Router()
const controller = require('../controllers/RetailerController')

Router.get('/all', controller.GetRetailers)
Router.get('/:retailers_id', controller.GetOneRetailer)

module.exports = Router
