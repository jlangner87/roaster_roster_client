const Router = require('express').Router()
const controller = require('../controllers/BeanController')

Router.get('/all', controller.GetBeans)
Router.get('/:beans_id', controller.GetOneBean)
Router.get('/local/:retailer_id', controller.GetBeanByRetailer)
Router.get('/roaster/:roaster_id', controller.GetBeanByRoaster)
//Collections (READ)
Router.get('/collection/organic', controller.Organic)
Router.get('/collection/dark', controller.DarkRoast)
Router.get('/collection/light', controller.LightRoast)
Router.get('/collection/blonde', controller.BlondeRoast)
Router.get('/collection/espresso', controller.EspressoRoast)
Router.get('/collection/wholebean', controller.WholeBean)
Router.get('/collection/coarse', controller.CourseGround)
Router.get('/collection/fine', controller.FineGround)
Router.get('/collection/origin/:country', controller.OriginCollections)
//CREATE, UPDATE, DELETE
Router.post('/add', controller.PostBean)
Router.delete('/:beans_id', controller.DeleteBean)
Router.put('/:beans_id', controller.PatchBean)

module.exports = Router
