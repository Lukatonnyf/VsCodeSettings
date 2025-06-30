'use client';

import Image from "next/image"
import Button from "../components/button"
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io"
import { IoLogoDiscord } from "react-icons/io5"

import Carousel from "../components/carousel"


export default function HomePage() {
  // links social medias
  const handleInstagram = () => {
    window.location.href = 'https://www.instagram.com/lukatonny.f/'
  }

  const handleDiscord = () => {
    window.location.href = 'https://discord.gg/MvxHmqbkq2'
  }

  const handleLinkedin = () => {
    window.location.href = 'https://www.linkedin.com/in/lukatonny-ferreira/'
  }

  // links buttons
  const handleRedirectYotube = () => {
    window.location.href = 'https://youtube.com/@lukatonnyf?si=pbda15nLXp5rZETy';
  };

  const handleRedirectPortifolio = () => {
    window.location.href = 'https://github.com/Lukatonnyf';
  };


  return (
    <div className="w-full h-screen px-5 py-2 flex justify-center overflow-hidden
     shadow-custom-purple-700">



      <div className="flex flex-col justify-center items-center w-full max-w-[1240px]
      px-5 lg:flex-row">

        <section className=" flex justify-center  flex-col items-center p-5
          w-full  h-full gap-3 lg:gap-10 ">

          <div className="flex flex-col w-full max-w-2xl  py-2 gap-3">
            <div className="flex flex-col justify-center items-center
            gap-2 h-full">
              <div className="text-center flex flex-col justify-center items-center">
                <Image
                  src="/tonny.jpg"
                  alt="image test"
                  className="object-contain object-center min-w-[10vw]
                  rounded-full"
                  width={150}
                  height={100}
                />
                <h1 className="font-semibold text-base lg:text-lg"
                >Lukatonny Ferreira</h1>
                <p className="text-text text-sm">Frontend Developer</p>
              </div>

              <ul>
                <li className="flex flex-row gap-3   ">
                  <ButtonSocialMedia text={<IoLogoInstagram className="text-sm" />}
                    innerRef={null}
                    onClick={handleInstagram} />

                  <ButtonSocialMedia
                    text={<IoLogoDiscord className="text-sm" />}
                    innerRef={null}
                    onClick={handleDiscord} />


                  <ButtonSocialMedia
                    text={<IoLogoLinkedin className="text-sm" />}
                    innerRef={null}
                    onClick={handleLinkedin} />
                </li>
              </ul>
            </div>


            <div className="flex flex-col  min-w-full
             gap-2  w-full">
              <Button text={"Portifólio"} innerRef={null} onClick={handleRedirectPortifolio} />
              <Button text={"Yotube"} innerRef={null} onClick={handleRedirectYotube} />
            </div>
          </div>

          <main className=" w-full mt-10  ">
            <Carousel />
          </main>
        </section>

      </div>
    </div >
  )
}
