import Course from './components/Course.jsx'
 
const App = ({courses}) => {

return (
  <div>
    <h1>My Courses:</h1>
    {courses.map(course => <Course course={course} key={course.id}/>) }
  </div>
)
}
export default App
