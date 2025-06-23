import { JsonRepository } from "@/repositories/post/json-post-repository"
import { drizzleDB } from "."
import { postsTable } from "./schemas"

(async () =>{
    const jsonPostRepository = new JsonRepository();
    const posts = await jsonPostRepository.findAll()
    
    try{
        await drizzleDB.delete(postsTable)
        await drizzleDB.insert(postsTable).values(posts)
    } catch(e){
        console.log(e)
    }
})()