import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";
import { formatRelativeDate } from "@/utils/format-dateTime";

type ContentPostHeadingProps = {
    title: string;
    dateTime: string;
    excerpt?: string;
    postLink: string;
    
}

export function ContentPostHeading({ title, dateTime, excerpt, postLink }: ContentPostHeadingProps) {

    console.log("Data recebida da API:", dateTime)

    if (!dateTime) {
        console.warn("invalid dateTime prop")
        return null;
    }

    return (
        <div className="flex flex-col gap-4 sm:justify-center">
            <PostDate dateTime={dateTime} />
            <PostHeading as="h2" children={title} url={postLink} />

            {excerpt && <p>{excerpt}</p>}

        </div>
    )
}