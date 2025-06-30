interface CodeLineProps {
  numberLine?: number | null;
  imports?: string | null;
  typesImports?: string | null;
  text?: string | null;
  description?: string | null;
}

const codeLine = ({ numberLine, imports, typesImports, text, description }: CodeLineProps) => {
  const colorMap: Record<string, string> = {
    export: "text-red-400",
    default: "text-red-400",
    from: "text-red-400",
    const: "text-red-400",
    return: "text-red-400",
    "=>": "text-red-400",
    "=": "text-red-400",
    ";": "text-gray-300",
    "<": "text-gray-300",
    ">": "text-gray-300",
    "/": "text-gray-300",
    "(": "text-yellow-300",
    ")": "text-yellow-300",
    "{": "text-yellow-300",
    "}": "text-yellow-300",
    "className=": "text-purple-400",
    Projeto: "text-purple-400",
  };

  return (
    <li className="flex text-white">
      <span className={`text-gray-400  w-6 font-mono text-sm text-left pr-4 select-none  border-borderbd
                        ${text ? 'border-r-2' : ''}`}>
        {numberLine}
      </span>

      <div className="pl-4 whitespace-pre ">
        {imports && <span className="text-red-400">{imports}</span>}
        {typesImports && <span className="text-gray-200">{typesImports}</span>}

        {text && /(from|export|default|className=|Projeto|return|const|=>|=|;|<|>|\(|\)|\{|\}|\/)/.test(text) ? (
          <>
            {text.split(/(from|export|default|className=|Projeto|return|const|=>|=|;|<|>|\(|\)|\{|\}|\/)/g).map((part, i) => (
              <span key={i} className={`${colorMap[part] ?? "text-amber-500"}`}>
                {part}
              </span>
            ))}
          </>
        ) : (
          <span className="text-green-400">
            {text}
            {description && <span className="text-gray-400"> {description}</span>}
          </span>
        )}
      </div>
    </li>

  )
}
