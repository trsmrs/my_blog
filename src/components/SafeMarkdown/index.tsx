type SafeMarkdownProps = {
    markdown: string
}

export function SafeMarkdown({markdown}: SafeMarkdownProps) {
    return <div>{markdown}</div>
}