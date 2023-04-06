export const PostComponent = ({cover, title, body, id}) => { 
 //props em react
 //elas podem ser desestruturadas caso elas sejam setadas uma a uma
 //se uma interação for usada como map, pode ser passado o array
 //de uma vez na prop, e depois ser setada:
 //const items = props.items
 //assim podendo usar elas
 return (
  <>
    <div className="container-items-header">
       <img src={cover} alt={title} />
       <h1 className="title-posts">{title}{id}</h1>
      <div className="body-posts">
       <p>{body}</p> 
      </div>
    </div>
  </>
 )
}