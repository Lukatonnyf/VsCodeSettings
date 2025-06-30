
import Card from "@/ui/Cards";

import ThemeSwitcher from "@/providers/theme-switcher";
import { ObjectId } from 'mongodb';
import { connectToDatabase } from '@/lib/mongodb';

import { notFound } from 'next/navigation';
import { useRouter } from "next/navigation";
import router from "next/router";
import ProfilePage from "@/app/(public)/profile/[id]/page";

interface PageProps {
  params: Promise<{ id: string }>;
}


const MenuBar = ({ params }: PageProps) => {
  async function profilePage() {
    const { id } = await params;

    const db = await connectToDatabase(process.env.MONGODB_URI!);
    const user = await db.collection("users").findOne({ _id: new ObjectId(id) });

    if (!user) {
      return notFound(); // ou componente JSX com mensagem de erro
    }

    return router.push(`/profile/${user}`);


  }
}

return (
  <Card className="fixed top-17 right-6 w-[16rem] h-[22rem]] p-5 gap-5">
    <h1 className="font-bold text-xl">Menu</h1>

    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-row  gap-1 w-full ">
        <button
          onClick={ProfilePage}
          className="rounded-sm bg-tertiary w-full py-4  transition-all duration-400  hover:bg-background">Minha conta</button>
        <button className="rounded-sm bg-tertiary w-full py-4 transition-all duration-400   hover:bg-background">Eventos</button>
      </div>
      <div className="flex flex-row gap-1 w-full">
        <button className="rounded-sm  bg-tertiary w-full py-4 transition-all duration-400   hover:bg-background">Galeria</button>
        <button className="rounded-sm bg-tertiary w-full py-4 transition-all duration-400   hover:bg-background">Sair</button>
      </div>

      <h1>Acessibilidade</h1>
      <div className="bg-none">
        <ThemeSwitcher />
      </div>
    </div>
  </Card>
)

}

export default MenuBar;
