import './styles.css'
import { TaskCard } from '../TaskCard/taskCard'
export const Tasks = ({task}) => {
  return(
  <div className='tasks-container'>
   {task.map(tasks =>(
    <TaskCard 
      key={tasks.id}
      body ={tasks.descricao}
      />
  ))}
  </div>
    
  )

}