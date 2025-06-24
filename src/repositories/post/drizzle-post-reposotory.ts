import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDB } from "../../db/drizzle/index";



export class DrizzlePostRepository implements PostRepository {

    async findAllPublic(): Promise<PostModel[]> {

        console.log('\n', 'D findAllPublic', '\n');

        const posts = drizzleDB.query.posts.findMany({
            orderBy: (posts, { desc }) => desc(posts.createdAt),
            where: (posts, { eq }) => eq(posts.published, true)
        })

        return posts
    }

    async findBySlugPublic(slug: string): Promise<PostModel> {
         console.log('\n', 'D findSLUG', '\n');
        const post = await drizzleDB.query.posts.findFirst({
            where: (posts, { eq, and }) =>
                and(eq(posts.published, true), eq(posts.slug, slug))
        })

        if (!post) throw new Error("Post nao encontrado para slug")

        return post;
    }


    async findAll(): Promise<PostModel[]> {
        
        const posts = await drizzleDB.query.posts.findMany({
            orderBy: (posts, { desc }) => desc(posts.createdAt),
        })

        return posts

    }

    async findById(id: string): Promise<PostModel> {
         
        const post = await drizzleDB.query.posts.findFirst({
            where: (posts, { eq }) =>
                eq(posts.id, id)
        })

        if (!post) throw new Error("Post nao encontrado para ID")

        return post;
    }

}

// (async () => {
//     const repo = new DrizzlePostRepository();
//     const posts = await repo.findAllPublic();

//     // posts.forEach(post => console.log(post.slug, post.published))
//     const post = await repo.findById('99f8add4-7684-4c16-a316-616271db199e')
//     console.log(post)
// })()