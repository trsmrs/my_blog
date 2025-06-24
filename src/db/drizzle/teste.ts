import { drizzleDB } from "."
import { postsTable } from "./schemas"

(async () =>{
   
    const posts = await drizzleDB.select().from(postsTable)
    
   posts.forEach(post =>{
     console.log(post.title)
   })
})()