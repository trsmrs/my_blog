import clsx from "clsx";


type ErrorPageProps = {
    pageTitle: string
    contentTitle: string
    content: React.ReactNode;
}

export default function ErrorPage({ pageTitle, contentTitle, content }: ErrorPageProps) {
    return (
        <>
            <title>{pageTitle}</title>
            <div className={clsx('flex flex-col items-center mx-auto justify-center text-center min-h-[320px] bg-slate-900 text-slate-100 mb-16 p-8')}>
                <div>
                    <h1 className="text-5xl/tight mb-4 font-bold">{contentTitle}</h1>
                    <div>{content}</div>
                </div>
            </div>
        </>
    )
}