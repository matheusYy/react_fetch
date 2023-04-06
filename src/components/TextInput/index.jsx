import './style.css'

export const TextInput = (props) => {
 return (
  <input 
  type="search" 
  placeholder="pesquisa" 
  onChange={props.handleChange} 
 />
 )
}