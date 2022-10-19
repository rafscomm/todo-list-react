
import { DeleteButtom } from '../DeleteButtom/deleteButtom'
import './styles.css'
export const TaskCard = ({body,id}, handleDelete) => {
  return(
  <div className='task-content' key={id}>
        <ul className='ul-tasks'>
         <input type="checkbox" className='complete-check'/>
          <li className='li-tasks'> {body}</li>
        <DeleteButtom 
        onClick= {handleDelete}
        id = {id}/>
        </ul>
  </div>
  
    )
}