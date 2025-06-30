
interface ButtonProps {
    text: string,
    className?: string,
    url?: string
}

export default function Button({text, url, className = '' }:ButtonProps) {
    return (
        <button className={`px-2 py-1 max-w-full rounded-full  text-sm ${className}`}>
            {text}
        </button>
    )
}