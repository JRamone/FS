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
      {props.partname} {props.exercises}
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
  return (
    <div>
      <Header coursename={course}/>
      <Content partname={part1} exercises={exercises1}/>
      <Content partname={part2} exercises={exercises2}/>
      <Content partname={part3} exercises={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}
export default App
