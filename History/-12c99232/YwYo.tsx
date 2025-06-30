interface CardProps {
  children: React.ReactNode;
  className?: string;
}
const Card = (props) => {
  <div >
    {props.children}
  </div>
}

export default Card;
