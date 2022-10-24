
import { DeleteButtom } from '../DeleteButtom/deleteButtom'
import './styles.css'
export const TaskCard = ({body, id, handleDelete}) => {
  return(
  <div className='task-content'>
    <ul className='ul-tasks'>
      <input type="checkbox" className='complete-check'/>
          <li className='li-tasks' key={id}> {body}</li>
        <DeleteButtom 
        onClick = {handleDelete}
        id = {id}/>
        </ul>
  </div>
  
    )
}