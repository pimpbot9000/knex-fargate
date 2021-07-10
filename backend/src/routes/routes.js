const { response } = require('express')
const express = require('express')
const { createPerson, getPersons } = require('../controllers/person')
const router = express.Router()

router.get('/health', (req, res) => {
    return res.status(200).send('I\'m healthy')
})

router.post('/persons', createPerson)
router.get('/persons', getPersons)

module.exports = router