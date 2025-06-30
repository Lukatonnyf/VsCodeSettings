interface CardProps {
  children?: React.ReactNode;
  className?: string;
}
const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`${className}
  bg-secondary max-w-full w-full  flex flex-col
 rounded-xl shadow-lg dark:shadow-md`} >
      {children}
    </div>
  )
}

export default Card;
