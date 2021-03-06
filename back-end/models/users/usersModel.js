const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    createdDate: { type: Date, default: Date.now }
})

schema.set('toJSON', {
    virtuals: true,
    versionKey: true,
    transform: function (doc, ret) {
        delete ret._id
        delete ret.hash
    }
})

module.exports = mongoose.model('User', schema)