const Button = ({ label, onClick }) => {
  return (
    <div className="flex flex-col flex-wrap gap-4 mt-4 sm:flex-row ">
      {buttons.map((btn, i) => (
        <button
          key={i}
          onClick={btn.onClick}
          className={`${[btn.className]}  text-start text-sm font-medium  rounded-3xl
              py-3 px-7 bg-tertyary
              sm:py-3 sm:px-5  sm:flex sm:justify-center sm:items-center sm:text-sm
              transition-all duration-300 hover:-translate-y-[2px]
              ${onMouse === i ? 'shadow-lg' : ''}`}
          onMouseEnter={() => setOnmoue(i)}
          onMouseLeave={() => setOnmoue(null)}>
          {btn.text}
        </button>
      ))}
    </div>
  )
}
