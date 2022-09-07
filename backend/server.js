const express = require('express')
const cors = require('cors')
const app = express()

// const AppRouter = require('./routers/AppRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
  console.log(`🚨Express is brewing on ${PORT}🚨`)
})

app.use('/api', (req, res) => {
  res.send(`This will be the API 'AppRouter' route`)
})
app.get('/', (req, res) => {
  res.send(`Express is brewing here ☕️`)
})
