import CodeLine from "./codeLine";
import type { ProjectProps } from "@/types/project_types";

interface VscodeViewerProps {
  codeData: ProjectProps[];
}

const VsCodeInterface = ({ codeData }: VscodeViewerProps) => {
  return (
    <pre>
      <code>
        <ul></ul>
      </code>
    </pre>
  )
}

export default VsCodeInterface;
