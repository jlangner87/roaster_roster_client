const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => {
  console.log(`The server is alive on ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('The root is alive ⚡️⚡️!')
})
