
interface ButtonProps {
    text: string,
    url?: string
}

export default function Button({text, url }:ButtonProps) {
    return (
        <button className="p-2">
            {text}
        </button>
    )
}