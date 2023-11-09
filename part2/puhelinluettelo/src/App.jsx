import { useState } from 'react'

const Display = ({persons, filter}) => {
  return (
    <ul style={{'listStyleType': 'none'}}>
      {persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase())).map(person => <li key={person.name}>{person.name}  -  {person.number}</li>)}
    </ul>
  )
}

const Filter = ({handler}) => {
  return (<>
      Filter shown with: <input onChange={handler}/>
      </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
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
      <Filter handler={handleFilterChange}/>
      <h2>Add a new</h2>
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
      <Display persons={persons} filter={filter}/>
    </div>
  )

}

export default App