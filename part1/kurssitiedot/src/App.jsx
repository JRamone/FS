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
      {props.parts.map(part => <Part name={part.name} exercises={part.exercises} key={part.name}/>)}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      total number of exercises: {props.parts.map(part => part.exercises).reduce((a,b) => a+b,0)}
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

  //1.4
  //REFACTOR:
  //Kurssit parts- nimiseen listaan
  //Muokkaa koodi toimivaksi

  //1.5
  //REFACTOR:
  //Luo kurssista ja sen osista yksi javascript olio
  // TESTAA !! 

  const App = () => {
    const course = {
      name:'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }

  return (
    <div>
      <Header coursename={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
export default App
