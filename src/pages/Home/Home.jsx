
import './Home.css';
import { InputSearch } from '../../components/InputSearch/inputSearch';
import { useState } from 'react';
import { Tasks } from '../../components/Tasks/tasks';

 export const Home = () => {
  const [tasks, setTask] = useState([{id:0, descricao:""}]);
  const [buttonPopup, setButtonPopup] = useState(false)


  const handleChange = (e) => {
  const {value} = e.target;
  if (buttonPopup === true)
  setTask(value);
  else
  setTask('');
  }
  return (
    <div className='container-main'>
      <h1>A fazer</h1>
        <InputSearch buttonPopup = {setButtonPopup}
        onChange = {handleChange}/>
        <Tasks  task ={tasks}/>
    </div>
   
  
  );
}
