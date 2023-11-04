const Footer = (props) => {
  return (
    <div>
      This amazing site was created by 
      <a href='https://www.github.com/JRamone'> JRamone</a>
    </div>
  )
}

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
      <Hello/>
      <Footer/>
    </div>
  )
}

export default App
