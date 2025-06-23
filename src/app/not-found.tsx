import ErrorPage from "../components/ErrorPage";

export default function NotFoundPage() {
    return (
        <>
            <ErrorPage
                pageTitle="Página não encontrada"
                contentTitle="404"
                content="Erro 404 - A página que você digitou não existe!" />
        </>
    )
}