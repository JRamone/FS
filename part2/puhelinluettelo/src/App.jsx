import { useState,useEffect } from 'react'
import personService from './services/persons.js'

const Display = ({persons, filter, eventhandlers}) => {
  return (
    <ul style={{'listStyleType': 'none'}}>
      {persons
        .filter(person => person.name
        .toUpperCase()
        .includes(filter.toUpperCase()))
        .map(person => <li key={person.name}>{person.name}  -  {person.number}<button name={person.name} value={person.id} onClick={eventhandlers.handlePersonDelete}>delete</button></li>)}
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
    personService
      .getAll()
      .then(persons => setPersons(persons))
  },[])

  // ---------------- EVENT HANDLERS ------------------
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handlePersonDelete = (event) => {
    const idToDelete = parseInt(event.target.value)
    const nameToDelete = event.target.name
    const really = window.confirm(`really delete ${nameToDelete}?`)
    if (really) {
      personService
        .deletePersonById(idToDelete)
        .then(setPersons(r => 
          persons
            .filter(p => p.id !== idToDelete)
            .map(p => p)
            )
          )
    }
    console.log('done')
  }

  // --------------------------------------------------

  const addNewPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const person_exists = persons.map(person => person.name).includes(newPerson.name)
    if (person_exists) {
      if (newNumber !== persons.mapfind()){

      }
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
      return
    }
    personService
      .addNewPerson(newPerson)
      .then((newPerson) => {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
        }
      )
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handler={handleFilterChange}/>
      <h2>Add a new</h2>
      <PersonForm
        eventhandlers = {{handleNameChange, 
                          handleNumberChange,
                          handlePersonDelete
                         }}
        statehandlers=  {{addNewPerson}}
        states = {{newName, newNumber}}
      
      />
      <h2>Numbers</h2>
      <Display persons={persons} filter={filter} eventhandlers={{handlePersonDelete}}/>
    </div>
  )

}

export default App