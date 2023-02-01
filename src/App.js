import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Finish Task Tracker',
        day: 'Jan 24th at 7:00pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Review Code',
        day: 'Jan 25th at 8:00am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Check Markets',
        day: 'Jan 26th at 7:00pm',
        reminder: false,
    },
  ])

  //Adding a task
  const addTask = (task) => {
    const id = Math.floor(Math.random * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task from Task.js controlling state with props
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder:
    !task.reminder } : task)
    )
  }

// the Tasks operator: if there are no tasks to show, display "no tasks to show"
  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
      <Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : ('No Tasks To Show')}
    </div>
  )
}

export default App;
