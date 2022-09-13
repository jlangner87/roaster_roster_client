const Router = require('express').Router()
const controller = require('../controllers/RoasterController')

Router.get('/all', controller.GetRoasters)
Router.get('/:roasters_id', controller.GetOneRoaster)
Router.delete('/dump', controller.DumpRoasters)

module.exports = Router
