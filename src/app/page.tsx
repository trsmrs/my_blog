import { postRepository } from "@/repositories/post/json-post-repository";


export default async function Home() {
 const posts = await postRepository.findAll();

  return (

    <div>
      {posts.map(post =>{
        return <p key={post.id}>{post.title}</p>
      })}
    </div>

  );
}
