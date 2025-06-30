

interface ButtonProps {
  text: string,
  className?: string,
  url?: string
}

export default function Button({ text, url, className = '' }: ButtonProps) {


  const handleScroll = () => {
    const targetSection = document.getElementById('cadastrar-atividades')
    if (targetSection) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: targetSection
      })
    }
  }

  return (
    <button
      onClick={handleScroll}

      type="submit"
      className={`px-2 py-1 max-w-full rounded-full  text-sm lg:px-7 lg:py-2 transition hover:scale-110 ${className}`}>
      {text}
    </button>
  )
};


