
interface ButtonProps {
    text: string,
    url?: string
}

export default function Button({text, url }:ButtonProps) {
    return (
        <button className="w-full p-2">
            {text}
        </button>
    )
}