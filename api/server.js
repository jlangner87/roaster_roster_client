const express = require('express')
const app = express()
const logger = require('morgan')
const cors = require('cors')

const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('The root is brewing ☕️!')
})
app.use('/api', AppRouter)

app.listen(PORT, () => {
  console.log(`🚨The server is alive & kicking on ${PORT}🚨`)
})
