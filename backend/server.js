const express = require('express')
const cors = require('cors')
const app = express()

const APIRouter = require('./routes/APIRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
  console.log(`☕️Express is serving WikiBean on http://localhost:${PORT}☕️`)
})

app.use('/api', APIRouter)
app.get('/', (req, res) => {
  res.send(`WikiBean-api is berewing here ☕️`)
})
