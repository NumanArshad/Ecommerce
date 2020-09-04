const mongoose = require('mongoose')
const config = require('./config.json')

const connectionOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: false
}
mongoose.connect( config.connectionstr, connectionOptions ).then(
    () => {
        console.log("Database Connection Established.")
    },
    err => {
        console.log("Error connecting to database.", err)
    }
)

mongoose.Promise = global.Promise

module.exports = {
    User: require('../models/users/usersModel')
}