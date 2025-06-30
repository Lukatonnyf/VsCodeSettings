
interface ButtonProps {
    text: string,
    className?: string,
    url?: string
}

export default function Button({text, url, className = '' }:ButtonProps) {
    return (
        <button className={`p-2 max-w-full`}>
            {text}
        </button>
    )
}