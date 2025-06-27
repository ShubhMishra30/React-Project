import Todo from "./Components/Todo.jsx"
import TodoTitle from "./Components/TodoTitle.jsx"
import PopUp from "./Components/PopUp.jsx"

function App() {

  return (
    <>
      <TodoTitle />
      <Todo task="Learn React"
      description="Learn React from scratch, including hooks and context API."
      />
      <Todo task="Land a junior job"
      description="Apply for jobs 2 hours every day, prepare for interviews, and build a portfolio."
      />
      <Todo task="Earn 20LPA+"
      description="Work hard, learn new skills, and aim for a high salary."
      />
      <PopUp title="Are you 100% sure?" btn1="Confirm" btn2="Cancel" />
    </>
  )
}

export default App
