import { useState } from "react";
import { DeletedTasks } from "../../components/DeletedTasks/deletedTasks";


export const DeletePage =() =>{
  const [deletedTaks, setDeletedTasks] = useState([]);
  
  
  return(
    
    <DeletedTasks/> 
   );

};