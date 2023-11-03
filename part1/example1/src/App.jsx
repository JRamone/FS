const Hello = (props) => {

  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = "Pekka"
  const age = 25 
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/>
      <Hello name="Kullervo" age={25+10}/>
      <Hello />
    </div>
  )
}

export default App
