'use client'

import { StaticImageData } from "next/image";
import Image from "next/image";

// import icons
import { BiLogoReact, BiLogoTypescript, BiLogoTailwindCss, BiLogoFigma, BiLogoCss3, BiLogoHtml5, BiLogoJavascript } from "react-icons/bi";


// import imgs
import PlanNet from '../../../public/notebook_mockup_plan_net_final.png'
import TabletPortifolioMockup from '../../../public/notebook_celular_mockup_lukatonny.png'
import DatingRequest from '../../../public/dating-request.png'
import FraganciaDivinaMockup from '../../../public/notebook_mockup_fraganciadivina.png'
import RocketConvert from '../../../public/rocketconver.png'
import { ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";

export interface ProjectProsp {
  id: number;
  name: string;
  img: StaticImageData | string;
  description?: string;
  className?: string;
  lenguage: ReactNode[];
  link: string
}

export const ArrayProjects: ProjectProsp[] = [
  {
    id: 1,
    name: 'PlanNet',
    img: PlanNet,
    className: 'bg-card-plannet',
    description: "O PlanNet (plan-net.vercel.app) é uma plataforma online com design moderno e intuitivo, voltada para a criação e organização de rotinas. Com interface minimalista, slogan motivador e botão 'Criar Atividade', o site oferece uma experiência prática e visualmente agradável para quem busca gerenciar tarefas de forma simples, posicionando-se como um assistente digital eficiente.",
    lenguage: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="ts" />,
      <BiLogoTailwindCss key="tailwind" />,
      <BiLogoFigma key="figma" />
    ],
    link: "https://plan-net.vercel.app/"
  },
  {
    id: 2,
    name: 'Portifólio Pessoal',
    img: TabletPortifolioMockup,
    className: 'bg-bg-cards',
    description: 'O portfólio de Lukatonny Ferreira apresenta de forma clara sua jornada como desenvolvedor web, com design escuro e navegação fluida. Mostra sua trajetória autodidata iniciada em 2024, habilidades em tecnologias como React, TypeScript e TailwindCSS, projetos práticos e links para contato, transmitindo profissionalismo e disposição para atuar na área.',
    lenguage: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="ts" />,
      <BiLogoTailwindCss key="tailwind" />,
    ],
    link: 'https://lukatonnyferreiraportifolio.vercel.app/'
  },
  {
    id: 3,
    name: 'Fragância Divina',
    className: 'bg-bg-cards',
    img: FraganciaDivinaMockup,
    description: 'O site Fragrância Divina (fraganciadivina.vercel.app) destaca-se pela apresentação elegante e sofisticada, promovendo perfumes como expressões de personalidade e memória. Com design escuro e foco na exclusividade, valoriza fragrâncias intensas e frescas, desenvolvidas com atenção aos detalhes. A seção "Fragrâncias em Destaque" apresenta perfumes masculinos como Bleu de Chanel, Bad Boy C.H e Phantom Paco Rabanne, com descrições olfativas refinadas, além de sugerir um catálogo mais amplo e um canal de contato, consolidando-se como vitrine de luxo para experiências sensoriais únicas.',
    lenguage: [
      <BiLogoReact key="react" />,
      <BiLogoTypescript key="ts" />,
      <BiLogoTailwindCss key="tailwind" />,
    ],
    link: 'https://fraganciadivina.vercel.app/'

  },
  {
    id: 4,
    name: 'Dating Reques',
    img: DatingRequest,
    className: 'bg-card-romantic',
    description: 'O site "Impossível Recusar!" (romantic-developer.vercel.app) é uma proposta romântica interativa com design simples e foco em um pedido de namoro. Exibe a pergunta "Aceita Namorar Comigo?" com fundo em degradê rosa-roxo e um urso fofo no centro da tela. Oferece dois botões de resposta, "Sim!" (vermelho) e "Não!" (azul), destacando a opção afirmativa. Com uma interface minimalista e visual delicado, funciona como um cartão digital criativo, leve e divertido para declarar sentimentos.',
    lenguage: [
      <BiLogoHtml5 key="html" />,
      <BiLogoCss3 key="css" />,
      <BiLogoJavascript key="js" />
    ],
    link: 'https://romantic-developer.vercel.app/'

  },
  {
    id: 5,
    name: 'Rocket Convert',
    className: 'bg-card-rocketconvert',
    img: RocketConvert,
    description: ' O site "Convert" (rocket-convert.vercel.app) é uma ferramenta simples e intuitiva para conversão de moedas estrangeiras (dólar, euro e libra) para o real brasileiro. Com design minimalista e interface limpa, oferece um formulário direto com campos de valor, seleção de moeda e botão de conversão. O visual moderno, sem distrações ou anúncios, torna a experiência rápida e eficiente, ideal para consultas cotidianas, embora não exiba taxas de câmbio atualizadas ou datas de referência.',
    lenguage: [
      <BiLogoHtml5 key="html" />,
      < BiLogoCss3 key="css" />,
      <BiLogoJavascript key="js" />
    ],
    link: 'rocket-convert.vercel.app'
  }

]

export default function Carousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalItems = ArrayProjects.length

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= totalItems ? 0 : nextIndex
      })
    }, 3000)

    return () => clearInterval(intervalId)
  }, [totalItems])

  useEffect(() => {
    if (containerRef.current && itemRef.current[currentIndex]) {
      const container = containerRef.current;
      const item = itemRef.current[currentIndex]

      if (item) {
        container.scrollTo({
          left: item.offsetLeft - 16,
          behavior: "smooth"
        })
      }
    }
  }, [currentIndex])

  return (
    <div className="relative w-full max-w-2xl mx-auto my-8 px-4 mb-5 lg:mb-20
    flex flex-col justify-center items-center">

      <div className="flex justify-between w-full">
        <p className="flex flex-row gap-5 justify-between w-full font-semibold
        text-sm">
          Principais Projetos
          <span className="text-colortext font-normal text-sm">
            <a href="#" target="_blank">Ver mais</a>
          </span>
        </p>
      </div>


      <section
        ref={containerRef}
        className="flex gap-4 overflow-x-auto span-x scrollbar-hidden scroll-smooth
        px-2 p-4"

        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >

        {ArrayProjects.map((proj, index) =>
          <div key={proj.id}
            ref={(el) => { itemRef.current[index] = el; }}
            className={`shrink-0 min-h-[100px] max-w-[130px] snap-start
              bg-white rounded-xl hover:scale-105 transition-transform
              duration-300 flex justify-center items-center
              ${proj.className ?? ''}`}
            style={{ boxShadow: '5px 5px 5px #a9a9a9' }}>

            <Link href={`/aboutProject/${proj.id}`}>
              <Image
                src={proj.img}
                alt="Imagem Principal"
                className="object-contain object-center w-[50vw]"
                width={150}
                height={100}
              />
            </Link>
          </div>
        )
        }

      </section >
    </div >
  )

}
