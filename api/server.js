const cors = require('cors')
const logger = require('morgan')

const express = require('express')
const PORT = process.env.PORT || 3001
const AppRouter = require('./routes/app')
const RoasterController = require('./controllers/RoasterController')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
  console.log(`🚨The server is alive & kicking on ${PORT}🚨`)
})

app.get('/', (req, res) => {
  res.send('The root is alive ⚡️⚡️!')
})
