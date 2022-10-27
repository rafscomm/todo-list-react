import {IoIosCheckbox} from "react-icons/io";
import "./styles.css";

export const CompleteButtom = ({handleComplete,id}) => {
  return(
    <button className="complete-buttom" onClick={()=> handleComplete(id) }>
      <IoIosCheckbox />
    </button>
    )

}