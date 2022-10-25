import "./styles.css";
import {IoIosArchive} from "react-icons/io"

export const DeleteButtom= ({onClick, id}) =>{
  return(
   <button className="delete-buttom" onClick = {() => onClick(id)}>  <IoIosArchive /> </button>  
  )
}