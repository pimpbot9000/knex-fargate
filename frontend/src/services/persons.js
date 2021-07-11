const baseUrl = process.env.REACT_APP_API_URL
const axios = require('axios')
const camelcaseKeys = require('camelcase-keys')
const snakecaseKeys = require('snakecase-keys')
const personsUrl = `${baseUrl}/persons`


const getAll = async () => {
    const response = await axios.get(personsUrl)
    return camelcaseKeys(response.data, {deep: true})
}

const createNew = async (person) => {

    const obj = snakecaseKeys(person, { deep: true })
    const response = await axios.post(personsUrl, obj)
    return camelcaseKeys(response.data, {deep: true})
}

const personService = {
    getAll,
    createNew
}

export default personService