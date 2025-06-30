
interface ButtonProps {
    text: string,
    className?: string,
    url?: string
}

export default function Button({text, url, className = '' }:ButtonProps) {
    return (
        <button className={`px-5 max-w-full rounded-xl ${className}`}>
            {text}
        </button>
    )
}