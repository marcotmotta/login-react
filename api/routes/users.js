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
router.get('/:id', async (request, response) => {
    try {
        let user = await Users.findById(request.params.id)
        user ? response.json(user) : response.json({ message: 'Could not find user' })
    } catch (error) {
        //server error
        response.status(500).json({ message: error.message })
    }
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
router.patch('/:id', async (request, response) => {
    let user
    try {
        user = await Users.findById(request.params.id)
        if (!user) {
            return response.json({ message: 'Could not find user' })
        }
    } catch (error) {
        //server error
        return response.status(500).json({ message: error.message })
    }
    for (e in request.body) {
        user[e] = request.body[e]
    }
    try {
        const updatedUser = await user.save()
        //success
        response.status(200).json(updatedUser)
    } catch (error) {
        //data received error
        response.status(400).json({ message: error.message })
    }
})

// Deleting One
router.delete('/:id', async (request, response) => {
    try {
        let user = await Users.findById(request.params.id)
        if (!user) {
            return response.json({ message: 'Could not find user' })
        }
        user.remove()
        response.json({ message: 'Deleted user' })
    } catch (error) {
        //server error
        response.status(500).json({ message: error.message })
    }
})


module.exports = router