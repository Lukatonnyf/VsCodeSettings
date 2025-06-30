
interface ButtonProps {
    text: string,
    className?: string,
    url?: string
}

export default function Button({text, url }:ButtonProps) {
    return (
        <button className="bg-p-2">
            {text}
        </button>
    )
}