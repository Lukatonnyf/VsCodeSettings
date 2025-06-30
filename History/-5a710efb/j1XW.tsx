import type { Metadata } from 'next'



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

export default async function Home() {
  return (
    <div className="min-h-full pb-5 flex justify-center flex-col items-center">
      <HomePage />
      <VideoPlayer />
      <MySkills />
      <AboutMe />
      <Footer />
    </div>
  )
}
