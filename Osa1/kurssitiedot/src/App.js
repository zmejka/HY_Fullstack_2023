const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1> {props.course_name} </h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p> {props.part.part_name} {props.part.part_exercises} </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      < Part part={props.parts[0]} />
      < Part part={props.parts[1]} />
      < Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p> {props.name} {props.counter} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {part_name: 'Fundamentals of React', part_exercises: 10},
    {part_name: 'Using props to pass data', part_exercises: 7},
    {part_name: 'State of a component', part_exercises: 14}
  ]

  return (
    <div>
      <Header course_name = {course} />
      <Content parts = {parts}/>
      <Total name = 'Number of exercises' counter = {parts[0].part_exercises + parts[1].part_exercises + parts[2].part_exercises}/>
    </div>
  )
}

export default App
