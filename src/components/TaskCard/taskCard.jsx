
import { CompleteButtom } from '../CompleteButtom/completeButtom'
import { DeleteButtom } from '../DeleteButtom/deleteButtom'
import './styles.css'
export const TaskCard = ({body, id, handleDelete, handleComplete}) => {
  return(
  <div className='task-content'>
    <ul className='ul-tasks'>
        <li className='li-tasks' key={id}> {body}</li>
        <div className='div-buttom'>
          <DeleteButtom 
          onClick = {handleDelete}
          id = {id}/>
          <CompleteButtom handleComplete ={handleComplete} id = {id}/>
        </div>
        </ul>
  </div>
  
    )
}