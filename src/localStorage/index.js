


 export const saveTask = (task) =>{
  localStorage.setItem("mytasks", JSON.stringify(task));
}

export const getTask = () =>{
  const storageTasks = localStorage.getItem("mytasks")
  if(!storageTasks)
    return [];
  else
  return JSON.parse(storageTasks)
}


export const getCompleteTask = () =>{
  const completeTasks = localStorage.getItem("mytasks");
  if(!completeTasks)
    return [];
  else
  return JSON.parse(completeTasks).filter((item) => item.status === true)
}

export const removeTask = (id) => {
  const storageTasks = localStorage.getItem("mytasks")
  if(!storageTasks)
    return [];
  else{
  const removedTasks = JSON.parse(storageTasks).filter((item) => item.id !== id);
  localStorage.setItem("mytasks", JSON.stringify(removedTasks));
  }
}