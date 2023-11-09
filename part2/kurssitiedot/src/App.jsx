const Header = (props) => {
  return (
    <h1>
      {props.coursename}
    </h1>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => <Part name={part.name} exercises={part.exercises} key={part.id}/>)}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <b>total number of exercises: {props.parts.map(part => part.exercises).reduce((a,b) => a+b,0)}</b>
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

const Course = ({course}) => {
  return (
  <>
    <Header coursename={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
  </>
  )
}
 
const App = () => {
  const course = {
    name:'Half Stack application development',
    id : 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id : 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id : 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id : 3
      },
      {
        name: 'Just another part to test rendering',
        exercises: 11,
        id : 4
      }
    ]
  }

return (
  <div>
    <Course course={course} />
  </div>
)
}
export default App
