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
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
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
  // välitä props listana Contentille ja sieltä Parttiin & testaa DONE!

  //1.3
  //Copypastea oliot
  //Muokkaa koodia niin että sovellus toimii muuten samalla tavalla
  //Testaa toimivuus

  const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }


  
  return (
    <div>
      <Header coursename={course}/>
      <Content parts={[part1,part2,part3]}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}
export default App
