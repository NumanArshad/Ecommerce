require('dotenv').config()
const config = require('./config/db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3000
const app = express()

app.use(cors())
app.options('*', cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
}) 