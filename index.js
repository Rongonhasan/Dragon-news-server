const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;


const categores = require('./data/categories.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Dragom is raning!')
})

app.get ('/categores', (req, res) => {
    res.send(categores);
})

app.listen(port, () => {
  console.log(`Dragon api run at 5000 ${port}`)
})