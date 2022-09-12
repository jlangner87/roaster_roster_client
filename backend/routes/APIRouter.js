const Router = require('express').Router()
const BeanRouter = require('./BeanRouter')
const RoasterRouter = require('./RoasterRouter')
const RetailerRouter = require('./RetailerRouter')

Router.use('/beans', BeanRouter)
Router.use('/roasters', RoasterRouter)
Router.use('/retailers', RetailerRouter)
Router.get('/test', (req, res) => {
  res.send(`WikiBean-api is ALSO berewing here on the test route ☕️`)
})

module.exports = Router
