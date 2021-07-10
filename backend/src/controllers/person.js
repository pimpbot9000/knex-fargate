const db = require('../db/db')

const createPerson = async (req, res) => {

    const [ dbResult ] = await db('person').insert({        
        ...req.body
    }).returning('*')

    return res.status(201).json(dbResult)

}

const getPersons = async (req, res) => {
    const queryResult = await db.select('*').from('person')    
    return res.status(200).json(queryResult)
}

module.exports = { createPerson, getPersons }
