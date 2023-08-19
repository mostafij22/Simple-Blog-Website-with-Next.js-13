
export default async function getBlogPost(id) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    
    if(!res.ok){
      throw new Errow('Error fetching posts')
    }
  
    return res.json();
  
}

