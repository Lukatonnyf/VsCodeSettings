import { ReactNode } from "react";

interface ButtonProps {
  props: string | ReactNode;
}

const button = ({ props }: ButtonProps) => {
  return (
    <buton>
      {props}
    </buton>
  )
}

export default button
