import React from 'react';

interface CardsProps {
  children?: React.ReactNode;
  className?: string | undefined;
}

const Cards = ({ children, className = '' }: CardsProps) => {

  return (
    <div className={`${className} px-5 py-5 `}>
      {children}
    </div>
  )
}

export default Cards
