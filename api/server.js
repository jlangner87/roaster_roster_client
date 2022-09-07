const cors = require('cors')
const logger = require('morgan')

const express = require('express')
const PORT = process.env.PORT || 3001

const BeanController = require('./controllers/BeanController')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
  console.log(`The server is alive on ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('The root is alive ⚡️⚡️!')
})

app.get('/roasters', (req, res) => {
  res.send('this is the roaster list page')
})
app.get('/roasters/:id', (req, res) => {
  res.send(`This is the roaster profile for roaster with id: ${req.params.id}`)
})
app.get('/beans', BeanController.getBeans)

app.get('/beans/:id', (req, res) => {
  res.send(`This is the bean display for bean with id: ${req.params.id}`)
})
