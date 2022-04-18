const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dogs = require('./router/dogs')

const dbURL = 'mongodb://127.0.0.1:27017/'

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result) => {
    console.log('Connected to the Database Successfully')
    app.listen(3000, () => {
        console.log('Listening on port 3000... ')
    })
}).catch((err) => {
    console.log(err)
})

app.get('/', (req, res) => {
    res.send("<h1>The server is fully operational and conncted to Mongodb database.</h1>")
})

app.get('/api', (req, res) => {
    res.send("<h1>The server is fully operational and conncted to Mongodb database.</h1>")
})

app.use('/dogs',dogs)
