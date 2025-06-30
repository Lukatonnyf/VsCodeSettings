import { ReactNode } from "react";

interface ButtonProps {
  props: string | ReactNode;
  className: string
}

const button = ({ props, className }: ButtonProps) => {
  return (
    <button className="">
      {props}
    </button>
  )
}

export default button
