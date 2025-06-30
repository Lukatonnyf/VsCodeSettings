'use client'
import Image from "next/image";
import ButtonSocialMidia from "../components/buttonSocialMidias";

// IMPORTAÇÃO DE ICONS
import { BiLogoDiscord, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import Button from "../components/button";
import Carousel from "../components/carousel";

export default function HomePage() {

  const handleInstagram = () => {
    window.location.href = 'https://www.instagram.com/'
  }


  const handleDiscord = () => {
    window.location.href = 'https://discord.gg/sztgqbgB'
  }


  const handleLinkedin = () => {
    window.location.href = 'https://www.linkedin.com/in/lukatonny-ferreira/'
  }

  // functions buttons maiores
  const handlePortifolio = () => {
    window.location.href = 'https://github.com/Lukatonnyf'
  }

  const handleYoutube = () => {
    window.location.href = 'https://www.youtube.com/@CodingEasyFront'
  }


  return (
    <div className="w-full h-screen px-5 py-2 flex justify-center overflow-hidden shadow-custom-purple-700">

      <div className="flex flex-col justify-center items-center w-full max-w-[1240px]
      px-5 lg:flex-row">

        <section className="flex flex-col justify-center items-center p-5 w-full  gap-3 lg:gap-10 ">
          <div className="flex flex-col w-full max-w-2xl py-2 gap-3">
            <div className="flex flex-col justify-center items-center gap-2 h-full">

              {/* Heading */}
              <div className="text-center flex flex-col justify-center items-center">
                <Image
                  src="/tonny.jpg"
                  alt="Imagem Principal"
                  className="object-contain object-center min-w-[10vw]
                  rounded-full"
                  width={150}
                  height={100}
                />
                <h1 className="font-semibold text-base lg:text-lg">
                  Lukatonny Ferreira
                </h1>
                <p className="text-colortext text-text">Frontend Developer</p>
              </div>

              <ul>
                <li className="flex flex-row gap-3">
                  <ButtonSocialMidia
                    innerRef={null}
                    text={<BiLogoInstagram className="text-sm" />}
                    onClick={handleInstagram}
                  />

                  <ButtonSocialMidia
                    innerRef={null}
                    text={<BiLogoDiscord className="text-sm" />}
                    onClick={handleDiscord}
                  />

                  <ButtonSocialMidia
                    innerRef={null}
                    text={<BiLogoLinkedin className="text-sm" />}
                    onClick={handleLinkedin}
                  />
                </li>
              </ul>

              <div className="flex flex-col min-w-full gap-2 w-full">
                <Button text={"Portifólio"} innerRef={null}
                  onClick={handlePortifolio} />
                <Button text={"Youtube"} innerRef={null}
                  onClick={handleYoutube} />
              </div>

            </div>
          </div>

        </section>

        <main className="w-full mt-10 ">
          <Carousel />
        </main>

      </div>
    </div >
  )
}
