const mongoose = require('mongoose')
const connectionstr = "mongodb://localhost:27017/khareedlodb";

const options = {
    reconnectTries: Number.MAX_VALUE,
    pooleSize: 10
}

mongoose.connect( connectionstr, options ).then(
    () => {
        console.log("Database Connection Established.")
    },
    err => {
        console.log("Error connecting to database.", err)
    }
)