import { useEffect, useState } from 'react'
import personService from './services/persons'
import poliisi from './images/poliisi.png'

const App = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    personService.getAll().then(persons => {
      console.log(persons)
      setPersons(persons)
    })
  }, [])

  const addPerson = async (person) => {
    console.log("addperson", person)
    const createdPerson = await personService.createNew(person)
    setPersons(persons.concat(createdPerson))
  }

  return (
    <>
      <img src={poliisi} alt={"poliisi"} />
      <h1>Salainen mustalaisrekisteri</h1>
      <NewPerson addPerson={addPerson} />
      <PersonList persons={persons} />
    </>
  )
}
const PersonList = ({ persons }) => {
  const rows = persons.map(person =>
    <p key={person.id}>{person.firstName} {person.lastName}, {person.email}</p>
  )

  return (
    <div>
      <h1>List of persons</h1>
      <div> {rows} </div>
    </div>
  )
}

const NewPerson = ({ addPerson }) => {

  const firstName = useField('text')
  const lastName = useField('text')
  const email = useField('text')

  const onSubmit = async (evt) => {
    evt.preventDefault()

    await addPerson({
      firstName: firstName.props.value,
      lastName: lastName.props.value,
      email: email.props.value
    })

    firstName.clear()
    lastName.clear()
    email.clear()
  }

  return (
    <form onSubmit={onSubmit}>
      Firstname:<br />
      <input {...firstName.props} />
      <br />
      Lastname:<br />
      <input {...lastName.props} />
      <br />
      Email:<br />
      <input {...email.props} />
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => setValue(event.target.value)
  const clear = () => setValue('')

  return {
    props: {
      type,
      value,
      onChange
    },
    clear
  }
}

export default App;
