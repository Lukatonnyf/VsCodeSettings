import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[auto] pt-3
    gap-3 bg-gradient-to-b from-black to-[#0a0a0a] border border-t-[#121212]">

      <ul className="text-gray-400 flex flex-col gap-2 ">
        <li >
          <h1 className="text-gray-100 text-lg font-bold">Contáte-nos por WhatsApp</h1>
          <p >
            <span className="flex flex-row gap-1 items-center text-gray-200">
              <IoLogoWhatsapp className="text-green-600 font-bold size-5" />
              (11) 93306-5939
            </span>
            <span>Fragância Divina</span>
          </p>
        </li>

        <li>
          <h1 className="text-gray-100 text-lg font-bold">Siga-nos no Instagram!</h1>
          <p>
            <span className="flex flex-row gap-1 text-gray-200 ">
              <IoLogoInstagram className="size-5  text-[#d62976]" />
              Fragancia Divina
            </span>
            <span>@fragranciadivina.oficial
            </span>
          </p>
        </li>
      </ul>

      <ul className="text-gray-400 flex flex-row gap-5 bg-[#0]
      max-w-[50dvh] w-full border justify-between items-center py-2 ">
        <h1 className="text-gray-300 text-md font-bold">Desenvolvedor</h1>

        <li>
          <div >
            <p >
              <span className="flex flex-row gap-1 text-sm items-center">
                <FaLinkedin className="text-blue-400 font-bold size-5" />
                Linkedin
              </span>
            </p>
          </div>

          <div >
            <h1 className="text-gray-300 text-md font-bold">Desenvolvedor</h1>
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
