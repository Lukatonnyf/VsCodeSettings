import CodeLine from "./codeLine";
import type { ProjectProps } from "@/types/project_types";

interface VscodeViewerProps {
  codeData: ProjectProps[];
}

const VsCodeInterface = ({ codeData }: VscodeViewerProps) => {
  return (
    <pre className="p-5 w-full h-full overflow-x-auto whitespace-pre max-w-full border border-borderbd rounded-xl bg-[#1F1F1F]">
      <code className="w-full font-mono text-sm">
        <ul>
          {codeData.map((line) => (
            <CodeLine key={line.id} {...line} />
          ))}
        </ul>
      </code>
    </pre>
  )
}

export default VsCodeInterface;
