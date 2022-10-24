import "./styles.css";

export const DeleteButtom= ({onClick, id}) =>{
  return(
   <button className="delete-buttom" onClick = {() => onClick(id)}>
      Delete
    </button>  
  )
}