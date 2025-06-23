import { ContentPostHeading } from "../ContentPostHeading";
import { PostCoverImage } from "../PostCoverImage";
import { formatDateTime } from "@/utils/format-dateTime";
import { findAllPublicPostsCached } from "@/lib/post/queries";

export async function PostFeatured() {
    const posts = await findAllPublicPostsCached();
    let rnd = Math.floor(Math.random() * posts.length)
    const post = posts[rnd]
    

    const postLink = `/post/${post.slug}`

    return (
        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
            <PostCoverImage
                linkProps={{
                    href: postLink

                }}
                imageProps={{
                    width: 1200,
                    height: 720,
                    src: post.coverImageUrl,
                    alt: post.title,
                    priority: true

                }}
            />
            <ContentPostHeading
                title={post.title}
                dateTime={formatDateTime(post.createdAt)}
                excerpt={post.excerpt}
                postLink={postLink}
                
            />
        </section>
    )
}