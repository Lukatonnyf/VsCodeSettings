import type { Metadata } from 'next'
import {useTranslations} from 'next-intl';
import Providers from './providers';

import imageOpenGraph from '/public/opengraph.png'
import HomePage from './(home)/homePage'
import AboutMe from './(home)/aboutme'
import Footer from './(home)/footer'
import MySkills from './(home)/mySkills'
import VideoPlayer from './(home)/subpages/videoPlayer'

export const metadata: Metadata = {
  description: 'Bem vindo ao meu Portifólio!',
  openGraph: {
    images: [
      {
        url: imageOpenGraph.src,
        width: 1200,
        height: 630,
        alt: 'Imagem OpenGraph',
      },
    ],
    authors: ['Lukatonny Souza Ferreira'],
  },
}

export default async function Home({ params }: { params: { locale: string } }) {
  return (
    <Providers locale={params.locale}>
    <div className="min-h-full pb-5 flex justify-center flex-col items-center">
      <HomePage />
      <VideoPlayer />
      <MySkills />
      <AboutMe />
      <Footer />
    </div>
    </Providers>
  )
}
