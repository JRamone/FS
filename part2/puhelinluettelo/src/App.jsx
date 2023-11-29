import { useState,useEffect } from 'react'
import personService from './services/persons.js'

const Notification = ({notification}) => {
  const {message, type} = notification
  const errorStyle = {
    height : 50,
    fontSize : 32,
    padding : 20,
    border : 3,
    borderStyle : 'solid',
    borderRadius : 10,
    background : 'LightCoral',
    color : 'Crimson'
  }
  const emptyStyle = {
    height : 50,
    fontSize : 32,
    padding : 20,
  }
  const successStyle = {
    height : 50,
    fontSize : 32,
    padding : 20,
    border : 3,
    borderStyle : 'solid',
    borderRadius : 10,
    background : 'Chartreuse',
    color : 'DarkGreen'
  }
  if (!message) return <div style={emptyStyle}></div>
  if (type === 'success') return <div style={successStyle}>{message}</div>
  if (type === 'error') return <div style={errorStyle}>{message}</div>
  return <div>failure in notification component</div>
}

const Display = ({persons, filter, eventhandlers}) => {
  return (
    <ul style={{'listStyleType': 'none'}}>
      {persons
        .filter(person => person.name
        .toUpperCase()
        .includes(filter.toUpperCase()))
        .map(person => <li className='person' key={person.name}>
          {person.name}  -  {person.number}
          <button name={person.name} value={person.id} onClick={eventhandlers.handlePersonDelete}>delete</button></li>)}
    </ul>
  )
}

const Filter = ({handler}) => {
  const filterStyle = {
    padding : 10
  }
  return (<div style={filterStyle}>
      Filter shown with: <input onChange={handler}/>
      </div>
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
  const [notification, setNotification] = useState({})

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
        .then(() => {
          setNotification({message:`deletöd ${nameToDelete} from phonebook`, type: 'success'})
          setTimeout(() => setNotification({}),2000)
        })
        .catch(e => {
          setNotification({message:`error, ${nameToDelete} does not exist`, type: 'error'})
          setTimeout(() => setNotification({}),2000)
        })
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
    const existing_person = persons.find(p => p.name === newPerson.name)
    
    if (existing_person) {
      if (newNumber !== existing_person.number){
        const ok = window.confirm(`${existing_person.name} is already on the phonebook, replace old number with a new one?`)
        if (ok) {
          personService
            .updateNumber({...existing_person, number: newNumber})
            .then(updatedPerson => {
              const updatedPersons = persons.map(p => p.name !== existing_person.name ? p : {...existing_person, number: newNumber})
              setPersons(updatedPersons)
              setNotification({message:`updated ${newName}'s number`, type: 'success'})
              setTimeout(() => setNotification({}),2000)
            })
            .catch(e => {
              setNotification({message:`${e}`, type: 'error'})
              setTimeout(() => setNotification({}),2000)
            })
        }
      } else {
        alert(`${newName} is already added to phonebook`)
      }
      
      setNewName('')
      setNewNumber('')
      return
    }
    personService
      .addNewPerson(newPerson)
      .then((newPerson) => {
        setNotification({message:`added ${newName} to phonebook`, type: 'success'})
        setTimeout(() => setNotification({}),2000)
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
        }
      )
      .catch(e => {
        setNotification({message:`${e}`, type: 'error'})
        setTimeout(() => setNotification({}),2000)
      })
    
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification notification={notification}/>
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