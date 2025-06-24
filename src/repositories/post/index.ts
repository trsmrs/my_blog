import { DrizzlePostRepository } from "./drizzle-post-reposotory";
import { PostRepository } from "./post-repository";

export const postRepository: PostRepository = new DrizzlePostRepository();