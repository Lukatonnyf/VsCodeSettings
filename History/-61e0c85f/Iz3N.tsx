
interface ButtonProps {
    text: string,
    className?: string,
    url?: string
}

export default function Button({text, url, className = '' }:ButtonProps) {
    return (
        <button className={`px-7 py-2 max-w-full rounded-full  ${className}`}>
            {text}
        </button>
    )
}