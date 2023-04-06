import './style.css';

export const Button = (props) => {
 const { text, onClick } = props
 return (
  <button className="button-more-posts" onClick={onClick}>{text}</button>
 )
}