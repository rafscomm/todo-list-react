
import './Home.css';
import { InputSearch } from '../../components/InputSearch/inputSearch';
import { useEffect, useState } from 'react';
import { Tasks } from '../../components/Tasks/tasks';
import {saveTask,getTask,getCompleteTask,removeTask} from '../../localStorage/index'

 export const Home = () => {
  const [tasks, setTask] = useState([]);


  let list = [...tasks]

   const handleDelete = (id) =>{
   const newList = list.filter((item) => item.id !== id);
   setTask(newList);
   removeTask(id);
  }

  const handleComplete = (id) =>{
    list.forEach((element,index) => {
      index === id - 1  ? element.status = true : false;
    });
  }
   console.log(getCompleteTask())

  const handleChange = (desc) => {
    if(desc !== ""){
      list.push({ id: tasks.length + 1, desc: desc, status:false})
      saveTask(list);
      setTask(list);
    }else {
      alert("Não pode ser inserida uma task vazia");
    }
  }
  console.log(getTask());
  
  // localStorage.clear();

  const render = getTask();

  const renderEffect = () => {
    let renderList = []
    render.map((task) => renderList.push({
      id: task["id"],
      desc: task["desc"],
      status: task["status"],
    }))
    setTask(renderList);
  }
  
  useEffect(() => {renderEffect()},[]);

 
  return (
    <div className='container-main'>
      <h1>Todo List</h1>
        <InputSearch  onClick = {handleChange} />
        <div className= "container-task-main">
        <Tasks  task = {tasks} handleDelete ={handleDelete} handleComplete = {handleComplete} />
        
        </div>
    </div>
   
  
  );
}
