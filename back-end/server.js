require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const errorHandler = require('./utils/errorHandler')
// const auth = require('./utils/middleWare/auth')
const port = process.env.PORT || 3000
const app = express()

app.use(cors())
app.options('*', cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// Routes
app.use('/users', require('./routes/users/userRoutes'))

// global error handler
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
}) 