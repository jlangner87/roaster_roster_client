const Router = require('express').Router()
const controller = require('../controllers/RoasterController')

Router.get('/all', controller.GetRoasters)
Router.get('/:roasters_id', controller.GetOneRoaster)

module.exports = Router
