'use client'

import yotube from '/public/yotube.svg'
import instagram from '/public/instagramlogo.svg'
import tiktok from '/public/tiktok.svg'
import linkedin from '/public/linkedin.svg'
import discord from '/public/discord.svg'
import github from '/public/github.svg'
import Image, { type StaticImageData } from 'next/image'
import { ArrowDown } from 'lucide-react'

interface ProjectProps {
  id: number
  img?: StaticImageData
  text: string
  btn: string
}

export default function VsMySocialMedias() {
  const lineNumbers = []
  for (let i = 1; i <= 7; i++) {
    lineNumbers.push(
      <li className="flex  justify-end text-numbers-vscode" key={i}>
        {i}
      </li>
    )
  }

  const socialMedias: ProjectProps[] = [
    {
      id: 1,
      img: yotube,
      text: 'Subscribe to my channel',
      btn: 'https://www.youtube.com/@lukatonnyf',
    },
    {
      id: 2,
      img: instagram,
      text: 'Follow Me in instagram!',
      btn: 'https://www.instagram.com/lukatonny.f/',
    },
    {
      id: 3,
      img: tiktok,
      text: 'Follow me on Titok',
      btn: 'https://www.tiktok.com/@lukatonnyferreiras?is_from_webapp=1&sender_device=pc',
    },
    {
      id: 4,
      img: linkedin,
      text: 'My linkedin',
      btn: 'https://www.linkedin.com/in/lukatonny-ferreira/',
    },
    {
      id: 5,
      img: github,
      text: 'My Github',
      btn: 'https://github.com/Lukatonnyf',
    },
    {
      id: 6,
      img: discord,
      text: 'Join my discord',
      btn: 'https://discord.gg/Z2MUSFv6ME'
    },
  ]

  const irSocialMedias = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <div className="w-full h-full">
      <div className="flex flex-row p-5 gap-5">
        <span>
          <ul className="flex flex-col gap-2">{lineNumbers}</ul>
        </span>

        <ul className="w-full min-h-full flex flex-col items-start gap-2">
          <h1 className="w-full flex  flex-row items-center gap-2 text-gray-200 font-heading text-sm">
            My social medias Links <ArrowDown className="size-4" />
          </h1>
          {socialMedias.map(social => (
            <li
              key={social.id}
              className="flex flex-row items-center  gap-3 text-gray-300"
            >
              <Image
                src={social.img || '/fallback-image.svg'}
                alt={social.text}
                className="size-6  "
              />
              <button type="button" onClick={() => irSocialMedias(social.btn)}>
                {social.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
