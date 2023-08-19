import getAllPost from "@/lib/getAllPost";
import getBlogPost from "@/lib/getBlogPost";
import getPostComments from "@/lib/getPostComments";
import delay from "./delay";
import { Suspense } from "react";
import Comments from "@/app/components/Comments";



export default async function SingleBlog({params}) {

  const id = params.id;

  //waterfall model
  // const post = await getBlogPost(id);
  // const comments = await getPostComments(id);

  const postPromise = await getBlogPost(id);
  const commentsPromise = await getPostComments(id);

  await delay(2000);

  //request in parallel
  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  //incremental data fetching
  const post = await postPromise;
    
  return (
    <div>
        <section>
            <h1 className="font-bold text-lg">{post.title}</h1>
            <div className="mt-5">
                {
                    post.body
                }
            </div>
            <Suspense fallback={<h3>Loading comments..</h3>}>
              <Comments commentsPromise={commentsPromise}/>
            </Suspense>
        </section>
    </div>
  )
}





export async function generateStaticParams() {
  const posts = await getAllPost();
 
  return posts.map((post) => ({
    id: " " + post.id,
  }))
}
 




