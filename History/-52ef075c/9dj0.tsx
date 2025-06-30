import { ReactNode } from "react";

interface ButtonProps {
  props: string | ReactNode;
}

const button = ({ props }: ButtonProps) => {
  return (
    <button>
      {props}
    </button>
  )
}

export default button
