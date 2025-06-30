'use client';
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Footer() {

  const numeroWhatsApp = '5513974035694';
  const mensagem = 'Olá, gostaria de saber mais informações sobre os perfumes!';
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
  const urlInstagram = `https://www.instagram.com/fragranciadivina.oficial/`;

  const email = "lukatonnyferreira16@gmail.com";
  const assunto = "Informações sobre serviços de Desenvolvimento";
  const corpo = "Olá, gostaria de saber mais sobre o produto como posso contratar seus serviços de Desenvolvimento.";
  const urlEmail = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

  const urlLinkedin = `https://www.linkedin.com/in/lukatonny-ferreira/`;

  return (
    <div className="flex flex-col justify-center items-center w-full h-[auto] pt-3
    gap-3 bg-gradient-to-b from-black to-[#0a0a0a] border border-t-[#121212]">

      <ul className="text-gray-400 flex flex-col gap-2 ">
        <li onClick={() => window.open(urlWhatsApp, '_blank')}>
          <h1 className="text-gray-100 text-lg font-bold">Contate-nos por WhatsApp</h1>
          <p >
            <span className="flex flex-row gap-1 items-center text-gray-200">
              <IoLogoWhatsapp className="text-green-600 font-bold size-5" />
              (13) 974035694
            </span>
            <span>Fragrância Divina</span>
          </p>
        </li>

        <li onClick={() => window.open(urlInstagram, '_blank')}>
          <h1 className="text-gray-100 text-lg font-bold">Siga-nos no Instagram!</h1>
          <p>
            <span className="flex flex-row gap-1 text-gray-200 ">
              <IoLogoInstagram className="size-5  text-[#d62976]" />
              Fragrância Divina
            </span>
            <span>@fragranciadivina.oficial
            </span>
          </p>
        </li>
      </ul>

      <ul className="text-gray-400 flex flex-col gap-1 w-2/2
      border-t border-t-[#121212]  justify-between items-center py-2 pb-3 ">
        <h1 className="text-gray-300 text-md font-bold">Desenvolvedor</h1>
        <li className="flex flex-row gap-5  text-sm items-center" >
          <div className="flex flex-row gap-1 text-sm items-center"
            onClick={() => window.open(urlEmail, '_blank')}>
            <p >
              <span className="flex flex-row gap-2 text-sm items-center">
                <FaEnvelope className="w-6 h-6 text-gray-700" />
                Email
              </span>
            </p>
          </div>

          <div
            className="flex flex-row gap-1 text-sm items-center"
            onClick={() => window.open(urlLinkedin, '_blank')}>
            <p >
              <span className="flex flex-row gap-1 text-sm items-center">
                <FaLinkedin className="text-blue-400 font-bold size-5" />
                Linkedin
              </span>
            </p>
          </div>


        </li>
      </ul>
    </div>
  )
}
