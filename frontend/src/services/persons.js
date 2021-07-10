const baseUrl = process.env.REACT_APP_API_URL
const axios = require('axios')

const personsUrl = `${baseUrl}/persons`


const getAll = async () => {
    const response = await axios.get(personsUrl)
    return response.data
}

const createNew = async (person) => {
    
    const response = await axios.post(personsUrl, {
        first_name: person.firstName,
        last_name: person.lastName,
        email: person.email
    })
        
    return response.data
}

const personService = {
    getAll,
    createNew
}

export default personService