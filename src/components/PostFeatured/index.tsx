import { ContentPostHeading } from "../ContentPostHeading";
import { PostCoverImage } from "../PostCoverImage";

export function PostFeatured() {
    const slug = 'teste'
    const postLink = `/post/${slug}`

    return (
        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
            <PostCoverImage
                linkProps={{
                    href: postLink

                }}
                imageProps={{
                    width: 1200,
                    height: 720,
                    src: "/images/bryen_6.png",
                    alt: "imagem-title",
                    priority: true

                }}
            />
            <ContentPostHeading
                title={"Título teste - [Passar para useContext]"}
                dateTime={"16/08/2025 - [Passar para useContext]"}
                excerpt={"Em vez de configurar tudo manualmente, basta criar um arquivo com o nome certo e o Next.js entende que aquilo representa uma página.- [Passar para useContext]"}
                postLink={"/post"}
            />
        </section>
    )
}