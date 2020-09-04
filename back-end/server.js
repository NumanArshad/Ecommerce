require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const errorHandler = require('./utils/errorHandler')
const auth = require('./utils/middleWare/auth')
const port = process.env.PORT || 3000
const app = express()
const router = require('./routes/users/userRoutes')


app.use(cors())
// app.use(auth())
app.options('*', cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/users', router)

// app.use(errorHandler())


app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
}) 