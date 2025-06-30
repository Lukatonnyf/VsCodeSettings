"use client"

import Image from "next/image"; 
import type {  StaticImageData } from "next/image";

import Honor from "/public/projects/honor.png";
import CalcImc from "/public/projects/calcimc.png";
import datingRequest from "/public/projects/dating-request.png"


interface ProjectProps {
    id: number;
    img?: StaticImageData | null; // Isso está certo para ser um tipo opcional
    name: string;
    description: string;
    btn: string;
}

const MyProjects: ProjectProps[] = [
    {
        id: 1,
        img: Honor, // Correto: sem chaves extras
        name: "Honor",
        description: "Landing page for Honor smartwatches ",
        btn: "http://steamredesigne-lukatonnydev.surge.sh/"
    },
    {
        id:2,
        img:datingRequest,
        name:"Dating Request",
        description:"A simple and cute proposal that is impossible to refuse, much to your delight!",
        btn: "https://duvidorecusar.surge.sh/"
    },
    {
        id:3,
        img: CalcImc,
        name:"BMI Calculation",
        description:"Calculate your muscle mass index quickly and easily.",
        btn: "https://calcindicemassamuscular.surge.sh/"
    },
]



//   gsap.registerPlugin(ScrollTrigger);
export default function CardProjects(){

    /** EXPLICAÇÃO DO DA FUNÇÃO
     * 
     * @param url 
     *   A Função abaixo Recebe uma URL do tipo String como parâmetro e a tipa
     * como STRING.
     * 
     * @funcionalidade window
     *   O Window.open() pega a url digitada Array, e a abre no tipo _blank, que
     * garante abrir o site em uma nova aba.
     * 
     * @Button Onclick()
     * - Por que usamos () => irProjeto(project.btn) e não irProjeto(project.btn) direto?
     *   Se escrevêssemos onClick={irProjeto(project.btn)}, o código chamaria a função 
     * imediatamente quando o componente renderizasse, o que não é desejado.
     *   Usando () => irProjeto(project.btn), garantimos que a função só será executada quando o botão for clicado.    
     */
    const irProjeto = (url: string) => {
        window.open(url, "_blank");
    };

    // ANIMATIONS
// const boxRef = useRef<HTMLDivElement>(null)
// useLayoutEffect(() => {
//     if (boxRef.current) {
//         gsap.from(boxRef.current, {
//             opacity: 0,
//             y: 0,
//             x:10,
//             duration: 2,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: boxRef.current,
//               start: "top 90%", // Quando 80% do vídeo entrar na tela
//               end: "top 50%",   // Até 50% do vídeo na tela
//               toggleActions: "play none none reverse", // Animação de entrada e saída
//             },    
//     });
//     }
//   }, []);


    return(
        <div className="w-full h-full flex  justify-center items-center p-5  flex-col  gap-5 md:flex-row md:flex-wrap"> 
           
            {
                MyProjects.map((project) => (
                    <div key={project.id} className="max-w-full w-full max-h-full h-full flex flex-col justify-between  items-start  p-2 pb-5 border border-gray-500 bg-gray-600 gap-2 rounded-2xl sm:w-[40dvh] sm:h-[42dvh] transition  sm:hover:scale-105">
                    {project.img && (
                      <Image 
                        src={project.img} 
                        alt={project.name} 
                        className="object-cover rounded-xl"
                        width={500} // Aumentar largura para melhor qualidade
                        height={300} // Ajustar altura para manter a proporção
                        layout="intrinsic" // Melhor ajuste sem achatamento
                      />
                    )}
                    <div className="h-[10dvh] gap-0 m-0">
                        <h1 className="text-purple font-heading font-semibold text-xl">{project.name}</h1>
                        <p className="text-gray-400 font-sans font-semibold text-sm sm:text-sm ">{project.description}</p>
                    </div>
                    <button type="button" className="mt-1 py-2 p-2 w-[20dvh] text-gray-100 bg-btn rounded-2xl  font-sans text-sm transition hover:bg-btn-hover" onClick={() => irProjeto(project.btn)}>Ir para o projeto</button>
                  </div>
                  
                ))
            }
    </div>
    )
}