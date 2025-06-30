interface ButtonProps {
  text: string;
  innerRef: React.Ref<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ text, innerRef, onClick }: ButtonProps)
