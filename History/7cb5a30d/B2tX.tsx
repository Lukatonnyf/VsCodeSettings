import Image from "next/image";
import ButtonSocialMidia from "../components/buttonSocialMidias";

// IMPORTAÇÃO DE ICONS
import { BiLogoDiscord, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import Button from "../components/button";
import Carousel from "../components/carousel";

export default function HomePage() {
  return (
    <div className="flex justify-center w-full h-screen px-5 py-2 overflow-hidden">


      <div className="flex flex-col justify-center items-center w-full max-w-[1240px]
      px-5 lg:flex-row">
        <section className="flex flex-col justify-center items-center px-5 py-2 w-full
        h-full gap-3 lg:gap-10  bg-red-300">

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
                <p className="text-colortext text-sm">Frontend Developer</p>
              </div>

              <ul>
                <li className="flex flex-row gap-3">
                  <ButtonSocialMidia
                    innerRef={null}
                    text={<BiLogoInstagram className="text-sm" />}
                  />

                  <ButtonSocialMidia
                    innerRef={null}
                    text={<BiLogoDiscord className="text-sm" />}
                  />

                  <ButtonSocialMidia
                    innerRef={null}
                    text={<BiLogoLinkedin className="text-sm" />}
                  />
                </li>
              </ul>

              <div className="flex flex-col min-w-full gap-2 w-full">
                <Button text={"Portifólio"} innerRef={null} />
                <Button text={"Youtube"} innerRef={null} />
              </div>

            </div>
          </div>

        </section>

        <main className="w-full mt-10">
          <Carousel />
        </main>

      </div>
    </div >
  )
}
