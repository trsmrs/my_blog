import Link from "next/link";
import clsx from 'clsx';
import Image from "next/image"


type PostImageProps = {

    imageProps: React.ComponentProps<typeof Image>
    linkProps: React.ComponentProps<typeof Link>
}

export function PostCoverImage({ imageProps, linkProps }: PostImageProps) {

    return (
        <Link {...linkProps} className={clsx('w-full h-full overflow-hidden rounded-xl', linkProps.className)}>
            <Image
                {...imageProps}
                className={clsx('w-full h-full object-cover group-hover:scale-105 transition', imageProps.className)}
                alt={imageProps.alt}
            />
        </Link>
    )
}