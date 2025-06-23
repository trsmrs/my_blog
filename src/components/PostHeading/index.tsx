import clsx from "clsx";
import Link from "next/link";

type HeadingProps = React.ComponentPropsWithoutRef<'h1'> &{
    children: React.ReactNode;
    url: string;
    as?: 'h1' | 'h2';
   
}

export function PostHeading({ children, url, as: TagHd = 'h2' }: HeadingProps) {
    const headingClassesMap = {
        h1: 'text-2xl/tight sm:text-4xl font-extrabold',
        h2: 'text-2xl/tight font-bold'
    }

    return (
        <TagHd className={clsx(headingClassesMap[TagHd])}>
            <Link className="group-hover:text-cyan-600 transition" href={url}>
                {children}
            </Link>
        </TagHd>
    )
}