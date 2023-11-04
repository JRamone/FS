const Header = (props) => {
  return (
    <div>
      {props.coursename}
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part/>
      <Part/>
      <Part/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      total number of exercises: {props.total}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.name} {props.exercises}
    </div>
  )
  
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  //1.1
  //alt + click for multiple cursors!
  // REFACTOR:
  // Luo kolme uutta komponenttia DONE!
  // Header, Content, Total DONE!
  // Testaa jokainen DONE!
  // Kaikki data komponentissa App -> välittää propsien avulla DONE!
  // Header renderöi nimen DONE!
  // Content renderöi osat ja tehtävämäärät DONE!
  // Total renderöi tehtävien yhteismäärän DONE!

  //1.2
  //REFACTOR:
  // Content ei renderöi osien nimiä eikä tehtävien lukumäärää vaan 3 Part-komponenttia
  // Part renderöi yhden osan nimen ja tehtävämäärän
  //--------------------------------------------
  // Luo Part ja testaa toiminta DONE!
  // välitä props & testaa
  
  return (
    <div>
      <Header coursename={course}/>
      <Content partnames={[part1,part2,part3]} exercises={[exercises1]}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}
export default App
