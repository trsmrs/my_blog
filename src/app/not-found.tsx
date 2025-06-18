import clsx from "clsx";

export default function NotFoundPage(){
    return (
    
    <div className={clsx('flex flex-col items-center mx-auto justify-center text-center min-h-[320px] bg-slate-900 text-slate-100 mb-16 p-8')}>
        <h1 className="text-5xl/tight mb-4 font-bold">404</h1>
        <p>Erro 404 - Página que você digitou não existe!</p>
    </div>
    )
}