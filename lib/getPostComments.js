export default async function getPostComments(id) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    
    if(!res.ok){
      throw new Errow('Error fetching comments')
    }
  
    return res.json();
  
}

