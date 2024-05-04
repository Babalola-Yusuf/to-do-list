import { useState } from 'react'
import './App.css'

function App(props) {
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
    <div className=' bg-base p-6 max-w-screen-sm'>
      <h1 className='text-3xl'>To Do List by {props.user}</h1>  
      <div className='flex gap-4 mt-4 mb-2'>
        <input type="text" value={newTasks} onChange={handleInputChange} placeholder='Add a new task' className='text-vividPurple p-2' id='task'/>    
        <button onClick={handleAddTask} className='bg-vividCyan text-white p-2 focus:bg-vividPurple  rounded-md'>Add</button>
      </div>

      <ol className='flex flex-col'> {tasks.map((task, index) => 
      <li key={index} className='bg-main p-2 mb-2 mt-4 flex gap-2 justify-between items-center' > 
        <span className=' mr-4 text-xl'>{task}</span>
        <div className='flex gap-4 '>
        <button className='bg-vividCyan text-red-600 font-bold p-2 text-sm rounded-md border-vividPurple border-2'
          onClick={() => handleDeleteTask(index)}>delete
        </button>
        <button className='bg-vividPurple p-2 text-sm rounded-md'
          onClick={() => moveTaskUp(index)}>👆
        </button>
        <button className='bg-vividPurple p-2 text-sm rounded-md'
          onClick={() => moveTaskDown(index)}>👇
        </button>

        </div>
        
      </li>)} 
      </ol>

    </div>
  )
}

export default App
