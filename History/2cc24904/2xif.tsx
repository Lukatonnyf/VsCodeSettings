import Image, { StaticImageData } from "next/image"
import { ReactNode, useEffect, useRef, useState } from "react";

import PlanNetMockupt from '../../../public/notebook_mockup_plan_net_final.png'
import TabletPortifolioMockup from '../../../public/notebook_celular_mockup_lukatonny.png'
import DatingRequest from '../../../public/dating-request.png'
import FraganciaDivinaMockup from '../../../public/notebook_mockup_fraganciadivina.png'

import Tonny from '../../../public/teste.jpg'
import Link from "next/link";

// import icons lenguages

import { BiLogoCss3, BiLogoFigma, BiLogoHtml5, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";

export interface ProjectsProps {
  id: number;
  name: string;
  img: StaticImageData | string;
  description?: string;
  className?: string,
  lenguage: ReactNode[];
  link: string
}

export const ArrayProjects: ProjectsProps[] = [
  {
    id: 1,
    name: 'PlanNet',
    img: PlanNetMockupt,
    className: 'bg-bg-cards',
    description: "O PlanNet (plan-net.vercel.app) é uma plataforma online intuitiva e com design moderno, focada em auxiliar usuários a criar e organizar suas rotinas de forma descomplicada. Com uma interface minimalista e visualmente atraente, que inclui um logotipo temático e uma ilustração motivadora, o site convida à ação através do slogan 'Crie seu planejamento e organize sua rotina' e do botão principal 'Criar Atividade'. Destinado a um público que valoriza praticidade e design, o PlanNet se posiciona como um assistente digital para o planejamento de atividades, oferecendo também um link para informações sobre o desenvolvedor, e buscando simplificar o gerenciamento de tarefas diárias.",
    lenguage: [<BiLogoReact />, <BiLogoTypescript />, <BiLogoTailwindCss />, <BiLogoFigma />],
    link: 'https://plan-net.vercel.app/'
  },
  {
    id: 2,
    name: 'Portifólio Pessoal',
    img: TabletPortifolioMockup,
    className: 'bg-bg-cards',
    description: 'O portfólio de Lukatonny Ferreira apresenta de forma clara sua jornada como desenvolvedor web, com design escuro e navegação fluida. Mostra sua trajetória autodidata iniciada em 2024, habilidades em tecnologias como React, TypeScript e TailwindCSS, projetos práticos e links para contato, transmitindo profissionalismo e disposição para atuar na área.',
    lenguage: [<BiLogoReact />, <BiLogoTypescript />, <BiLogoTailwindCss />],
    link: 'https://lukatonnyferreiraportifolio.vercel.app/'
  },
  {
    id: 3,
    name: 'Fragância Divina',
    className: 'bg-bg-cards',
    img: FraganciaDivinaMockup,
    description: 'O site Fragrância Divina (fraganciadivina.vercel.app) destaca-se pela apresentação elegante e sofisticada, promovendo perfumes como expressões de personalidade e memória. Com design escuro e foco na exclusividade, valoriza fragrâncias intensas e frescas, desenvolvidas com atenção aos detalhes. A seção "Fragrâncias em Destaque" apresenta perfumes masculinos como Bleu de Chanel, Bad Boy C.H e Phantom Paco Rabanne, com descrições olfativas refinadas, além de sugerir um catálogo mais amplo e um canal de contato, consolidando-se como vitrine de luxo para experiências sensoriais únicas.',
    lenguage: [<BiLogoReact />, <BiLogoTypescript />, <BiLogoTailwindCss />],
    link: 'https://fraganciadivina.vercel.app/'

  },
  {
    id: 4,
    name: 'Dating Reques',
    img: DatingRequest,
    className: 'bg-card-romantic',
    lenguage: [<BiLogoHtml5 />, <BiLogoCss3 />, <BiLogoJavascript />],
    link: 'https://propostaimpossivelrecusar.surge.sh/'

  },
  {
    id: 5,
    name: ' ',
    img: Tonny,
    lenguage: [<BiLogoReact />, <BiLogoTypescript />, <BiLogoTailwindCss />]

  }

]




export default function Carousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = ArrayProjects.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= totalItems ? 0 : nextIndex;
      }
      )
    }, 3000)

    return () => clearInterval(intervalId);
  }, [totalItems])

  useEffect(() => {
    if (containerRef.current && itemRefs.current[currentIndex]) {
      const container = containerRef.current;
      const item = itemRefs.current[currentIndex];

      if (item) {
        container.scrollTo({
          left: item.offsetLeft - 16,
          behavior: "smooth"
        });
      }
    }
  }, [currentIndex]);




  return (
    <div className="relative w-full max-w-2xl mx-auto my-8 px-4 mb-5 lg:mb-20
    flex flex-col justify-center items-center ">

      <div className="flex justify-between  w-full">
        <p className="flex flex-row  gap-5
            justify-between w-full font-semibold text-sm">
          Principais projetos
          <span className="text-text font-normal text-sm">ver mais</span>
        </p>
      </div>


      <section
        ref={containerRef}
        className="flex gap-4 overflow-x-auto snap-x scrollbar-hide
         scroll-smooth px-2 p-4 "
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>


        {ArrayProjects.map((proj, ind) => (

          <div key={proj.id}
            ref={(el) => { itemRefs.current[ind] = el; }}
            className={`shrink-0 min-h-[100px] max-w-[130px] snap-start
            bg-white  rounded-xl
            hover:scale-105 transition-transform duration-300
            lg:min-h-[100px] flex justify-center  items-center
            ${proj.className ?? ''}`}
            style={{ boxShadow: '5px 5px 5px #a9a9a9' }}>
            <Link href={`/aboutProject/${proj.id}`} passHref>
              <Image
                src={proj.img}
                alt={`Projeto ${proj.id}`}
                width={150}
                height={200}
                className="object-contain object-center w-[50dvw] " />
            </Link>
          </div>
        ))}
      </section>
    </div >
  )
}



