'use client'


import { useState } from 'react';
import FragDestaqueF from './fragDestaqueF';
import FragDestaqueMasc from './fragDestaqueMasc';
import SetComponentsDestaque from './setComponentsDestaq';

// import libs
// import Image from 'next/image';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { Geist_Mono, Sansita } from "next/font/google";
// // import images
// import BleuChanel from '../../../../public/bleuchanel-destaq.png'
// import BadBoy from '../../../../public/badboy-destaq.png'
// import Phantom from '../../../../public/phantom-destaq.png'
// import Heroes212 from '../../../../public/heroes212-destaq.png'


// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
//   weight: "900"
// });

// const sansita = Sansita({
//   variable: "--font-sansita",
//   subsets: ["latin"],
//   weight: '800'
// });

// // Interface para os itens de fragrância
// interface FragancesDestaque {
//   id: number;
//   title: string;
//   description: string;
//   img?: StaticImageData;
// }

// // Array de dados de fragrâncias
// const ArrayFragances: FragancesDestaque[] = [
//   {
//     id: 1,
//     title: "Bleu de Chanel",
//     description: "Elegante e atemporal, combina notas amadeiradas e cítricas para um aroma fresco, intenso e marcante. Perfeito para homens confiantes e sofisticados.",
//     img: BleuChanel
//   },
//   {
//     id: 2,
//     title: "Bad Boy C.H",
//     description: "Intenso e ousado, combina notas de pimenta preta, bergamota, tonka e cacau. Um aroma marcante para homens confiantes e autênticos.",
//     img: BadBoy
//   },
//   {
//     id: 3,
//     title: "Phantom Pacor R",
//     description: "Moderno e ousado, mistura lavanda, limão e baunilha em uma fragrância futurista e energética. Ideal para quem quer se destacar com atitude e estilo.",
//     img: Phantom
//   },
//   {
//     id: 4,
//     title: "Heroes 212",
//     description: "Fragrância fresca e marcante com notas de pêra, gengibre e musk. Ideal para quem vive com intensidade e estilo.",
//     img: Heroes212
//   },


// ];

// gsap.registerPlugin(ScrollTrigger);
export default function FragDestaques() {
  const [fragMasc, setFragMasc] = useState(true)
  const [fragFem, setFragFem] = useState(true)


  return (
    <div className="flex flex-col gap-5 items-center w-full min-h-[70dvh]
    h-full p-5 text-white  bg-gradient-to-b from-background via-black
    to-[#121212]" id='fragdestaques'>
      <SetComponentsDestaque
        onFragMascChangeAction={setFragMasc}
        onFragFemChangeAction={setFragFem}
      />

      <main className=" w-full ">
        {/* Exibindo uma mensagem de default quando nenhum componente for selecionado */}
        {!fragMasc && !fragFem && (
          <FragDestaqueMasc />
        )}

        {fragMasc && <FragDestaqueMasc />}
        {fragFem && <FragDestaqueF />}

      </main>


    </div >
  )
}
