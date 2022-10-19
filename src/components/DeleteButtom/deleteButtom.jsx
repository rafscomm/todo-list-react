import "./styles.css";

export const DeleteButtom= (props) =>{
  return(
   <button className="delete-buttom" onClick = {() => props.onClick(props.id)}>Delete</button>  
  )


}