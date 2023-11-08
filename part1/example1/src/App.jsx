import {useState} from 'react'

const Display = ({value}) =>{
  return <>{value}</>
}

const Button = ({text,handler}) =>{
  return <button onClick={handler}>{text}</button>
}

const App = (props) => {
  const [directions, setDirections] = useState({left:0,right:0})

  const clickLeft = () => setDirections({...directions, left:directions.left + 1})
  const clickRight = () => setDirections({...directions, right: directions.right + 1})
  
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
    </div>
  )
}

export default App
