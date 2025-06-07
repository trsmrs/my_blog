import clsx from 'clsx';
import classNames from 'clsx';


type SpinLoaderProps = {
    containerClasses?: string;
}

export default function SpinLoader({ containerClasses = "" }: SpinLoaderProps) {
    const classes = clsx(
        'flex',
        'items-center',
        'justify-center',
        containerClasses,
    )

    return (
        <div className={classes}>
            <div className={classNames('w-10 h-10 border-5 border-t-transparent border-amber-500 rounded-full animate-spin')}>
            </div>
        </div>
    )
}