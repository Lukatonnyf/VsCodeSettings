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

          <div className='w-full '>
            <div className="w-full justify-start  flex flex-col items-start mb-10" >
              <h1 className='font-semibold text-xl'>Sobre o projeto</h1>
              <h2>{projeto.name}</h2>
            </div>

            <Image
              src={projeto.img}
              alt={`Projeto ${projeto.id}`}
              width={150}
              height={100}
              className="object-contain object-center max-w-[100dvw]
             w-full md:w-[30dvw]"
            />

          </div>


          <div className=" flex flex-col gap-2 justify-start mt-4">

            <p className='text-sm flex flex-col font-semibold'>
              Descrição:
              <span className='font-normal text-xs sm:text-sm'>
                {projeto.description || "Descrição não disponível"}</span></p>


            <h1 className='mt-4 font-semibold'>Tecnologias Utilizadas: </h1>
            <div className='flex-row flex gap-4'>

              {projeto.lenguage.length > 0 ? (
                projeto.lenguage.map((tech, index) => (
                  <Image
                    key={index}
                    src={tech}
                    alt={`Tecnologia ${index + 1}`}
                    width={50}
                    height={50}
                    className="object-contain max-w-[7dvw]"
                  />
                ))) : (
                <p>carregando linguagens</p>
              )}
            </div>
          </div>


        </div>


      </section>
    </div>
  );
};

export default AboutProject;
