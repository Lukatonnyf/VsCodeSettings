'use client';

import Image from "next/image"
import Button from "../components/button"
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io"
import { IoLogoDiscord } from "react-icons/io5"
import ButtonSocialMedia from "../components/buttonSocialMedia"
import Carousel from "../components/carousel"


export default function HomePage() {
  return (
    <div className="w-full h-screen px-5 flex justify-center overflow-hidden
     shadow-custom-purple-700">



      <div className="flex flex-col justify-center items-center w-full max-w-[1240px]
      px-5 lg:flex-row">
        <section className=" flex justify-center  flex-col items-center p-5
          w-full  h-full gap-5 lg:gap-10 border  ">

          <div className="flex flex-col w-full max-w-2xl   min-h-[35dvh] gap-3">
            <div className="flex flex-col justify-center items-center
            gap-2
            h-full">
              <div className="text-center flex flex-col justify-center items-center">
                <Image
                  src="/teste.jpg"
                  alt="image test"
                  className="object-contain object-center -w-[10vw]
                  rounded-full"
                  width={150}
                  height={100}

                />
                <h1 className="font-semibold txt-sm lg:text-lg"
                >Lukatonny Ferreira</h1>
                <p className="text-text">Frontend Developer</p>
              </div>

              <ul>
                <li className="flex flex-row gap-3 w-full ">
                  <ButtonSocialMedia text={<IoLogoInstagram className="text-sm" />}
                    innerRef={null} />

                  <ButtonSocialMedia
                    text={<IoLogoDiscord className="text-sm" />}
                    innerRef={null} />

                  <ButtonSocialMedia
                    text={<IoLogoLinkedin className="text-sm" />}
                    innerRef={null} />
                </li>
              </ul>
            </div>


            <div className="flex flex-col  min-w-full
             gap-2  w-full">
              <Button text={"Portifólio"} innerRef={null} />
              <Button text={"Freelancers"} innerRef={null} />
            </div>
          </div>

          <main className=" w-full mt-10 ">
            <Carousel />
          </main>
        </section>

      </div>
    </div >
  )
}
