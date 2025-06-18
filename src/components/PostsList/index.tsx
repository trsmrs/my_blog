import { postRepository } from "@/repositories/post";
import { PostCoverImage } from "../PostCoverImage";
import { ContentPostHeading } from "../ContentPostHeading";

export async function PostsList() {
    const posts = await postRepository.findAll();

    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {
                posts.map(post => {
                    const postLink = `/post/${post.slug}`
                    return (

                        <div className="flex flex-col group gap-4" key={post.id}>
                            <PostCoverImage
                                linkProps={{
                                    href: postLink

                                }}
                                imageProps={{
                                    width: 1200,
                                    height: 720,
                                    src: post.coverImageUrl,
                                    alt: post.title,

                                }}

                            />

                            <ContentPostHeading title={post.title}
                                dateTime={post.createdAt}
                                excerpt={post.excerpt}
                                postLink={postLink}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}