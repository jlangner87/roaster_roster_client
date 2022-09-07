const Router = require('express').Router()
const RoasterController = require('../controllers/RoasterController')

Router.get('/all', RoasterController.get)
Router.get('/:roasters_id', RoasterController.getOneRoaster)

Router.post('/create', RoasterController.postRoaster)

Router.delete('/roasters_id', RoasterController.deleteRoaster)

Router.put('/"roasters_id', RoasterController.putRoaster)
module.exports = Router
