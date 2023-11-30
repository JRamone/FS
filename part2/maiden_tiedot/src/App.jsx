import { useState,useEffect } from 'react'
import countryService from './services/countryService'
import Countries from './components/CountryComponents'


function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const handleFilterChange = (e) => {
    e.preventDefault()
    setFilter(e.target.value)
  }

  useEffect(() => {
    countryService
      .getAll()
      .then(countries => setCountries(countries))
  },[])

  return (
    <div>
      Find countries<input onChange={handleFilterChange}></input>
      <Countries countries={countries} filter={filter} setFilter={setFilter}/>
    </div>
  )
}

export default App
