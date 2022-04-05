//get config variables
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

//add cors headers
app.use(cors())

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
