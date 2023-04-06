
import { useEffect, useState } from 'react';
import './style.css';
import { PostComponent } from '../../components/PostComponent';
import { fetchData } from '../../util/fetchData';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput'


export function Home(props) {
  const [data, setData] = useState(
    {
     posts: [], 
     allPosts: [],
     pages: 0, 
     postsPorPage: 6,
     searchValue: ''
    });
    const [target, setTarget] = useState('')

 useEffect(() => {
/*    fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(res => setData({posts: res})) */
   loadPosts();  
   props.onload()

}, [])
//criando uma função que pega o postAndPhotos e seta ele em uma contante para
//ser usada no estado, que é usado no hook useEffect
//que lida com o ciclo de vida
//slice: seria fatia o array, pegando o valor de inicio do index
//e o valor final, como se fosse uma tesoura 
  async function loadPosts() {
    const postsAndPhotos = await fetchData();
    const { pages, postsPorPage } = data;
    setData({
      posts: postsAndPhotos.slice(pages, postsPorPage),
      allPosts: postsAndPhotos,
      pages: data.pages,
      postsPorPage: data.postsPorPage, 
      searchValue: data.searchValue
    });
  }

  function loadMorePosts() {
   const { allPosts, pages, posts, postsPorPage } = data;
   const nextPage = pages + postsPorPage;
   const nextPost = allPosts.slice(nextPage, nextPage + postsPorPage);
   setData({ posts: 
    data.posts, 
    allPosts: data.allPosts, 
    pages: nextPage, 
    postsPorPage: data.postsPorPage,
    searchValue: data.searchValue
  })
   posts.push(...nextPost);
  }

   function handleChange(e) {
    setTarget(e.target.value)
   }
   //filtrando os posts com filter :)
   //ok, primeiro o array é pego do banco de dados ou da api no caso
   //depois ela é setada no estado e assim acessada pelo data.posts
   //a constante filterposts recebe um teste boleano, que pega os dados
   //do input se existe alguma string escrita nele ou não, se existir
   //ele filtra os titulos das postagens e as compara com as escritas 
   //no input, e retorna apenas as que estão incluidas 
   //usando filter() e includes()
   const filterPosts = !!target ? 
    data.posts.filter(post => {
     return post.title.toLowerCase().includes(target.toLowerCase())
    })
    : 
    data.posts;
  return (
    <>
     <section className="container-posts" onLoad={(e) => console.log(e.isTrusted)}>
      {!!target && (
       <>
        <h1>Search: <span>{target.toLocaleUpperCase()}</span></h1>
       </>
      )}
       <TextInput handleChange={handleChange} />
      <div className="container-items-posts">
      {
        filterPosts.length > 0 ?         
         filterPosts.map((items) => {
          return (
            <PostComponent 
            key={items.id}
            cover={items.cover} 
            title={items.title} 
            body={items.body}  
            id={items.id}
            />
            )
          })
       : (
        <>
         <h1 style={{width: '100%', fontSize: '2em'}}>não existem postagens...</h1>
        </>
      )
      }
     </div>
     {!target && (
       <Button onClick={loadMorePosts} text={"load more posts"} />
     )}
     </section>
    </>
  );
}

export default Home;
