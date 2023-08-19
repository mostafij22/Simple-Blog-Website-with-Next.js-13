import getAllPost from "@/lib/getAllPost"
import Link from "next/link";
import delay from "./[id]/delay";


export default async function Blog() {

  await delay(2000);  

  const posts = await getAllPost();  

  return (
    <div>
        <section>
            <h1 className="font-bold text-lg">Blog Posts</h1>
            <div className="mt-5">
                {posts.map(post => {
                    return (
                       <Link href={`/blog/${post.id}`}><p className="pb-5" key={post.id}>
                            {post.id}. {post.title}
                        </p>
                        </Link> 
                    )
                })}
            </div>
        </section>
    </div>
  )
}


