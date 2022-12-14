import './styles.css'
import { TaskCard } from '../TaskCard/taskCard'
export const Tasks = ({task,handleDelete,handleComplete}) => {
  return(
  <div className='tasks-container'>
   {task.map(tasks =>(
    <TaskCard 
      id ={tasks.id}
      body ={tasks.desc}
      handleDelete ={handleDelete}
      handleComplete ={handleComplete}
      />
  ))}
  </div>
    
  )
}