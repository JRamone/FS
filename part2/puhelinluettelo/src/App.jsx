import { useLayoutEffect, useState } from 'react'

const Display = ({persons}) => {
  return (
    <ul style={{'listStyleType': 'none'}}>
      {persons.map(person => <li key={person.name}>{person.name}</li>)}
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  const addNewPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName
    }
    const person_exists = persons.map(person => person.name).includes(newPerson.name)
    if (person_exists) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: 
          <input 
            value = {newName} 
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Display persons={persons}/>
    </div>
  )

}

export default App