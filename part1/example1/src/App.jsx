import {useState} from 'react'

const Display = ({value}) =>{
  return <>{value}</>
}

const Button = ({text,handler}) =>{
  return <button onClick={handler}>{text}</button>
}

const App = (props) => {
  const [directions, setDirections] = useState({left:0,right:0})
  const [allClicks, setAllClicks] = useState([])
  const [value,setValue] = useState(10)

  const clickLeft = () => {
    setDirections({...directions, left:directions.left + 1})
    setAllClicks(allClicks.concat('L'))
  }
  const clickRight = () => {
    setDirections({...directions, right: directions.right + 1})
    setAllClicks(allClicks.concat('R'))
  }

  // Tapahtumankäsittelijä on funktion palauttava funktio. Tällä kikalla saadaan yksi tapahtukäsittelijä hoitamaan montaa geneeristä tehtävää
  const setValueTo = (valueToSet) => {
    return () => setValue(valueToSet)
  } 

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>HIENO TAULU</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td><Display value={directions.left}/></td>
              <td><Display value={directions.right}/></td>
          </tr>
          <tr>
              <td><Button text='left' handler={clickLeft}/></td>
              <td><Button text='right' handler={clickRight}/></td>
          </tr>
        </tbody>
      </table>
      <div>{allClicks.join('')}</div>
      <div>{value}</div>
      <div><Button text='1000' handler={setValueTo(1000)}/></div>
      <div><Button text='500' handler={setValueTo(500)}/></div>
      <div><Button text='0' handler={setValueTo(0)}/></div>
    </div>
  )
}

export default App
