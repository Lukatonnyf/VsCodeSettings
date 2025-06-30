interface CardsProps {
  children?: React.ReactNode;
  className?: string | undefined;
}

const Cards = ({ children, className = '' }: CardsProps) => {

  return (
    <div className={`${className} px-5 py-5`}>

    </div>
  )
}

export default Cards
