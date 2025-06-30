'use client'
// app/aboutProject/[id]/page.tsx
import { usePathname } from 'next/navigation'; // Importa de next/navigation
import Image from 'next/image';
import { ArrayProjects } from '../../components/carousel'; // Corrija o caminho, se necessário

const AboutProject = () => {
  const pathname = usePathname(); // Obtém o caminho da URL atual
  const id = pathname?.split('/').pop(); // Extrai o id da URL

  if (!id) return <div>Carregando...</div>;

  const projeto = ArrayProjects.find(project => project.id === Number(id));

  if (!projeto) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <div className="w-full min-h-screen h-full bg-background overflow-y-hidden">
      <section className="w-full h-screen px-5 flex flex-col justify-center items-center
      overflow-hidden
     shadow-custom-purple-700">

        <div className='w-full flex flex-col justify-center items-center
        max-w-2xl gap-2 lg:flex-row lg:max-w-4xl lg:gap-5'>

          <div className='w-full   justify-start'>
            <div >
              <h1 className='font-semibold text-xl'>Sobre o projeto</h1>
              <h2>{projeto.name}</h2>
            </div>

            <Image
              src={projeto.img}
              alt={`Projeto ${projeto.id}`}
              width={150}
              height={100}
              className="object-contain object-center max-w-[50dvw]
             w-full md:w-[30dvw]"
            />

          </div>

          <p className='text-sm flex flex-col font-semibold'>
            Descrição:
            <span className='font-normal text-xs sm:text-sm'>
              {projeto.description || "Descrição não disponível"}</span></p>
        </div>
      </section>
    </div>
  );
};

export default AboutProject;
