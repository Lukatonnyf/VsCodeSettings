import { ReactNode } from "react";

interface ButtonProps {
  props: string | ReactNode;
}

const button = ({ props }: ButtonProps) => {
  return (
    <button className="px-4 p">
      {props}
    </button>
  )
}

export default button
