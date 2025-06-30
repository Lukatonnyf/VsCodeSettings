interface CardProps {
  children: React.ReactNode;
  className?: string;
}
const Card = ({ children, className = '' }: CardProps) => {
  <div className='' >
    {children}
  </div>
}

export default Card;
