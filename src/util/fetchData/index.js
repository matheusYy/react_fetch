export async function fetchData() {
 const postRes = fetch('https://jsonplaceholder.typicode.com/posts');
 const photosRes = fetch("https://jsonplaceholder.typicode.com/photos");
 const [post, photos] = await Promise.all([postRes, photosRes]);
 const postsJson = await post.json();
 const photosJson = await photos.json();
 const postsAndPhotos = postsJson.map((posts, index) => {
   return { ...posts, cover: photosJson[index].url}
   //método zip, pesquisar sobre isso depois 

   //
 })
 return postsAndPhotos;
}