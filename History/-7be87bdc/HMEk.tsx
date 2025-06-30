interface CardProps {
  children?: React.ReactNode;
  className?: string;
}
const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`${className}
bg-secondary w-full  flex flex-col
   py-[22px] px-4 rounded-xl shadow-lg dark:shadow-sm
  `} >
      {children}
    </div>
  )
}

export default Card;
