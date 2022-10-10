import './styles.css'

export const InputSearch = (props) =>{
  return(
  <div className="search-input">
    <input type="search" placeholder="Crie aqui" value={props.value} onChange={props.onChange} />
    <button className = 'styled-buttom-add'onClick={() => props.buttonPopup(true)}>AddTask</button>
  </div>
  )

}