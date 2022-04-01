const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

//parameters = name of the collection on the db and the schema
module.exports = mongoose.model('Users', usersSchema)
