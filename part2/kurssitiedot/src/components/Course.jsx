const Header = (props) => {
    return (
      <h2>
        {props.coursename}
      </h2>
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

  export default Course