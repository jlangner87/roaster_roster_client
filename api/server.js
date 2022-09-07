const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => {
  console.log(`The server is alive on ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('The root is alive ⚡️⚡️!')
})

app.get('/roasters', (req, res) => {
  res.send('this is the roaster list page')
})
app.get('/beans', (req, res) => {
  res.send('this is the beans list page')
})
