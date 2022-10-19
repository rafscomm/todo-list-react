import { useState } from 'react'
import './styles.css'

export const InputSearch = (props) =>{
  const [value, setValue] = useState("")
  return(
  <div className="search-input">
    <input type="search" placeholder="Crie aqui" value={value} onChange={(e) => setValue(e.target.value)} />
    <button className = 'styled-buttom-add'onClick={() => {props.onClick(value)
     setValue("")}}>+</button>
  </div>
  )

}