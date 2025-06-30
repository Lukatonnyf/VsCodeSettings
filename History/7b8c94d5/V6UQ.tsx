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
        {line.numberLine}
      </span>

    </li>

  )
}
