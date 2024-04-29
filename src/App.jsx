import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");
  const handleInputChange = (event) => {
    setNewTasks(event.target.value);
  }
  const handleAddTask = () => {
    if (newTasks.trim() !== "") {
      setTasks(t => [...t, newTasks]);
      setNewTasks("");
    }
  }

  const handleDeleteTask = (index) => {
    setTasks(t => t.filter((_, i) => i !== index));
  }

  const moveTaskUp = (index) => {
    if(index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
  }}
  const moveTaskDown = (index) => {
    if(index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }


  return (
    <div className=' bg-base p-6'>
      <h1>To Do List</h1>  
      <div className='flex gap-4 mt-4 mb-2'>
        <input type="text" value={newTasks} onChange={handleInputChange} placeholder='Add a new task'/>    
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ol> {tasks.map((task, index) => 
      <li key={index} className='bg-main p-2 mb-2 flex gap-2 justify-between items-center'> 
        <span className=''>{task}</span>
        <div className='flex gap-2'>
        <button className='bg-vividPurple text-white'
          onClick={() => handleDeleteTask(index)}>delete
        </button>
        <button className='bg-vividCyan'
          onClick={() => moveTaskUp(index)}>👆
        </button>
        <button className='bg-vividCyan'
          onClick={() => moveTaskDown(index)}>👇
        </button>

        </div>
        
      </li>)} 
      </ol>

    </div>
  )
}

export default App
