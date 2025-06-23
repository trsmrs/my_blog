"use client";

import ErrorPage from "@/components/ErrorPage";
import { useEffect } from "react";

type RootErrorPageProps = {
    error: Error;
}


export default function RootErrorPage({ error }: RootErrorPageProps) {
    useEffect(() => {
        console.log(error)
    }, [error])


    return (
        <ErrorPage pageTitle="Internal Server Error" contentTitle="501" content="Ocorreu um erro desconhecido. Tente novamente" />
    )
}