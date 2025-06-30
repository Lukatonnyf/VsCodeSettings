
interface ButtonProps {
    text: string,
    className?: string,
    url?: string
}

export default function Button({text, url, className = '' }:ButtonProps) {
    return (
        <button className={`p-2  p-lr-2xl max-w-full rounded-xl ${className}`}>
            {text}
        </button>
    )
}