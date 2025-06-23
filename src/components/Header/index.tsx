import clsx from 'clsx';
import Link from 'next/link';




export function Header() {

    return (
        <header>
            <h1 className={clsx('text-4xl/normal font-bold hover:text-amber-300 transition duration-1000 py-8',
                'sm: text-5xl/normal sm:py-10',
                'md: text-6xl/normal md:py-12'
            )}>
                <Link href='/'>The Code Talker Blog</Link>
            </h1>
        </header>
    )
}