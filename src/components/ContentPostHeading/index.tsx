import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";


type ContentPostHeadingProps = {
    title: string;
    dateTime: string;
    excerpt?: string;
    postLink: string;

}

export function ContentPostHeading({ title, dateTime, excerpt, postLink }: ContentPostHeadingProps) {

    if (!dateTime) {
        console.warn("invalid dateTime prop")
        return null;
    }

    return (
        <div className="flex flex-col gap-4 sm:justify-center">
            <PostDate dateTime={dateTime} />
            <PostHeading as="h2" url={postLink}>
                {title}
            </PostHeading>

            {excerpt && <p>{excerpt}</p>}

        </div>
    )
}