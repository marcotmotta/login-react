const { request } = require('express')
const express = require('express')
const router = express.Router()
const Users = require('../models/users')

// Getting all
router.get('/', async (request, response) => {
    try {
        const allUsers = await Users.find()
        response.json(allUsers)
    } catch (error) {
        //server error
        response.status(500).json({ message: error.message })
    }
})

// Getting One
router.get('/:id', (request, response) => {
    response.send(request.params.id)
})

// Creating One
router.post('/', async (request, response) => {
    const user = new Users({
        username: request.body.username,
        password: request.body.password
    })

    try {
        const newUser = await user.save()
        //saved successfully
        response.status(201).json(newUser)
    } catch (error) {
        //data received error
        response.status(400).json({ message: error.message })
    }
})

// Updating One
router.patch('/:id', (request, response) => {

})

// Deleting One
router.delete('/:id', (request, response) => {

})


module.exports = router