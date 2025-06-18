import { PostHeading } from "../PostHeading";

type ContentPostHeadingProps = {
    title?: string;
    dateTime?:  string;
    excerpt?: string;
    postLink: string;
}


export function ContentPostHeading({title, dateTime, excerpt, postLink}: ContentPostHeadingProps) {

    return (
        <div className="flex flex-col gap-4 sm:justify-center">
            <time className="text-slate-600 block text-sm/tight"
                dateTime={dateTime}>{dateTime}</time>

            <PostHeading as="h2" children={title} url={postLink} />
            <p>
                {excerpt}
            </p>
        </div>
    )
}