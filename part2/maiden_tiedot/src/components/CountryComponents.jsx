import Weather from './Weather'


const Countries = ({countries,filter,setFilter}) => {

    const countriesToShow = countries.filter(c => c.name.common.toUpperCase().includes(filter.toUpperCase()))

    if (countriesToShow.length === 1) return <ShowOne country={countriesToShow[0]}/>
    if (countriesToShow.length === 0) return <div>Nothing found</div>
    if (countriesToShow.length > 10) return <div>Too many countries, speficy a better filter</div>
    if (countriesToShow.length < 10) return <ListLessThanTen countries={countriesToShow} setFilter={setFilter}/>
}

const ListLessThanTen = ({countries,setFilter}) => {
    return (
        <ul style={{listStyleType:'none'}}>
            {countries.map(c => <li key={c.name.common}>{c.name.common}<button value={c.name.common} onClick={(e) => setFilter(e.target.value)}>Show</button></li>)}
        </ul>
    )
}

const ShowOne = ({country}) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital {country.capital}</p>
            <p>Area {country.area}</p>
            <p><b>languages:</b></p>
            <ul>
                {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
            </ul>
            <p><img src={country.flags.png}></img></p>
            <Weather country={country}/>
        </div>
    )
}
export default Countries