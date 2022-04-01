//for config variables
require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

const db = mongoose.connection

//for debugging
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

//create route for users
const usersRouter = require('./routes/users')
//all routes in users will start with [baseurl]/users/
app.use('/users', usersRouter)

app.listen(4000, () => console.log('Server Started'))
