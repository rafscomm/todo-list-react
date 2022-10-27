import './styles.css'
import { TaskCard } from '../TaskCard/taskCard'
export const DeletedTasks = ({task,handleDelete}) => {
  return(
  <div className='tasks-container'>
   {task.map(tasks =>(
    <TaskCard 
      id ={tasks.id}
      body ={tasks.desc}
      handleDelete ={handleDelete}
      />
  ))}
  </div>
    
  )
}