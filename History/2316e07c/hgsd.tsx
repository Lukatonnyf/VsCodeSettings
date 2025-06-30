import Image from "next/image"; 
import type {  StaticImageData } from "next/image";
import RocketSeatCertificado from "/public/certificados/rocketseat-certificado.png"



interface CertificadoProps {
    id: number;
    img?: StaticImageData | null; // Isso está certo para ser um tipo opcional
    org: string;
    linkCertificado: string
}



export default function VsMyHobbys(){
 const certificados: CertificadoProps[] = [
    {
        id:1,
        img:RocketSeatCertificado,
        org:"RocketSeat",
        linkCertificado: "https://app.rocketseat.com.br/certificates/eec4a6f1-4909-4cef-9bcc-fd60dc43ea71"
    },
    // {
    //     id:2,
    //     img:RocketSeatCertificado,
    //     org:"RocketSeat",
    //     linkCertificado: "https://app.rocketseat.com.br/certificates/eec4a6f1-4909-4cef-9bcc-fd60dc43ea71"

    // }, 
    //   {
    //     id:3,
    //     img:RocketSeatCertificado,
    //     org:"RocketSeat",
    //     linkCertificado: "https://app.rocketseat.com.br/certificates/eec4a6f1-4909-4cef-9bcc-fd60dc43ea71"
    // }
 ]

 const irCertificado = (url: string) => {
    window.open(url, "_blank");
};

    return(
        <div className="w-full h-full">
            <h1 className="w-full"> test</h1>
            <div className="w-full h-full bg-danger p-3 pt-4 flex flex-col justify-center items-center  gap-5 md:flex-row md:flex-wrap"> 
          {
            certificados.map((certificadosCursos) =>
            <div key={certificadosCursos.id} 
            className="max-w-[35dvh] w-full max-h-[40dvh] h-full flex flex-col justify-between items-start 
            p-2 pb-5 border border-gray-500 bg-gray-600 gap-2 rounded-2xl
            sm:w-[35dvh] sm:h-[35dvh] transition  sm:hover:scale-105">
            <Image 
               src={certificadosCursos.img || "/fallback-image.svg"} 
               alt={certificadosCursos.org} 
               className="object-cover rounded-xl"
               width={500} // Aumentar largura para melhor qualidade
               height={300} // Ajustar altura para manter a proporção
               layout="intrinsic" // Melhor ajuste sem achatamento
             />
             <div>
             <h1 className="font-heading font-semibold text-lg text-purple">{certificadosCursos.org}</h1>
             <button type="button" 
             className="mt-1 py-2 p-2 w-[15dvh] text-gray-100 bg-btn rounded-2xl  
             font-sans text-sm transition hover:bg-btn-hover" 
             onClick={() => irCertificado(certificadosCursos.linkCertificado)}>Ver certificado</button>
            </div>
          </div>  
            )
          }
        </div>

      </div>
    )
}