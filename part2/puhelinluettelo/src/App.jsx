import { useLayoutEffect, useState } from 'react'

const Display = ({persons}) => {
  return (
    <ul style={{'listStyleType': 'none'}}>
      {persons.map(person => <li key={person.name}>{person.name}  -  {person.number}</li>)}
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addNewPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const person_exists = persons.map(person => person.name).includes(newPerson.name)
    if (person_exists) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
      return
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: 
          <input 
            value = {newName} 
            onChange={handleNameChange}
          />
        </div>
        <div>
          number:
          <input 
            value = {newNumber} 
            onChange={handleNumberChange}
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