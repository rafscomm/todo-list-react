
import './Home.css';
import { InputSearch } from '../../components/InputSearch/inputSearch';
import { useEffect, useState } from 'react';
import { Tasks } from '../../components/Tasks/tasks';

 export const Home = () => {
  const [tasks, setTask] = useState([]);
  let list = [...tasks]

  const handleDelete = (id) =>{
   list.splice(id, 1);
   setTask(list);
  }

  const handleChange = (desc) => {
    list.push({ id: tasks.length + 1, desc: desc})
    setTask(list);
  }
  console.log(tasks)
  
  useEffect(() => {tasks[0,tasks]}, tasks[0,tasks])

 
  return (
    <div className='container-main'>
      <h1>A fazer</h1>
        <InputSearch  onClick = {handleChange} />
        <div className= "container-task-main">
        <Tasks  task ={tasks} handleDelete ={handleDelete} />
        </div>
    </div>
   
  
  );
}
