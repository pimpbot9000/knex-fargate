import { useEffect, useState } from 'react'
import personService from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([])


  useEffect(() => {

    personService.getAll().then(persons => {
      console.log(persons)
      setPersons(persons)
    })

  }, [])

  const addPerson = (person) => {
    console.log("addperson", person)
    personService.createNew(person).then(person => {
      console.log("created", person)
      setPersons(persons.concat(person))
    })
  }

  const rows = persons.map(person =>
    <p key={person.id}>{person.email}</p>
  )

  return (
    <>
      <NewPerson addPerson={addPerson} />
      <h1>List of persons</h1>
      <div> {rows} </div>
    </>
  )
}

const NewPerson = ({ addPerson }) => {

  const firstName = useField('text')
  const lastName = useField('text')
  const email = useField('text')

  const onSubmit = (evt) => {
    evt.preventDefault()
    addPerson({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value
    })
  }

  return (
    <form onSubmit={onSubmit}>
      firstname:<br />
      <input {...firstName} />
      <br />
      lastname:<br />
      <input {...lastName} />
      <br />
      email:<br />
      <input {...email} />
      <br />
      <button type="submit">login</button>
    </form>
  )
}

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => setValue(event.target.value)

  return {
    type,
    value,
    onChange
  }
}

export default App;
