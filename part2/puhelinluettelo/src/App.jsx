import { useState,useEffect } from 'react'
import axios from 'axios'

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

const PersonForm = ({eventhandlers, statehandlers, states}) => {
  return (
    <form onSubmit={statehandlers.addNewPerson}>
    <div>
      name: 
      <input 
        value = {states.newName} 
        onChange={eventhandlers.handleNameChange}
      />
    </div>
    <div>
      number:
      <input 
        value = {states.newNumber} 
        onChange={eventhandlers.handleNumberChange}
      />
    </div>
    <div>
      <button type="submit" >add</button>
    </div>
  </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(r => setPersons(r.data))
  },[])

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
      <PersonForm
        eventhandlers = {{'handleNameChange' : handleNameChange, 
                          'handleNumberChange': handleNumberChange,
                         }}
        statehandlers=  {{'addNewPerson' : addNewPerson}}
        states = {{'newName': newName, 'newNumber': newNumber}}
      
      />
      <h2>Numbers</h2>
      <Display persons={persons} filter={filter}/>
    </div>
  )

}

export default App