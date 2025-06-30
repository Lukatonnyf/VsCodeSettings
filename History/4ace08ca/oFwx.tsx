"use client"
import Button from '@/ui/button';
import { useEffect, useState } from 'react';

export default function ListaDados({ className }: { className: string; }) {
  const [dados, setDados] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/collections')
      .then(res => res.json())
      .then(data => setDados(data))
      .catch(console.error);
  }, []);

  return (
    <div className={`${className} flex h-full w-full  justify-center bg-red-4`}>
      <ul className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
        {
          dados.length > 0 ? (
            dados.map((item) => (
              <li
                className='flex flex-col justify-between gap-2 md:max-w-[25vw] w-full
            min-h-[35dvh] border border-bordercomponents p-5 rounded-xl'
                key={item._id}>

                <p className='flex flex-row gap-2 font-semibold '>
                  User:
                  <span className='font-normal  '>{item.name}</span>
                </p>


                <p className='flex flex-col font-semibold '>
                  Feedback:
                  <span className='font-normal  '>{item.feedback}</span>
                </p>


                <p className='flex gap-2 font-semibold '>
                  Data:
                  <span className='font-normal'>{new Date(item.subscribedAt).toLocaleDateString()}</span>

                </p>

              </li>
            ))) : (
            <>
              <div className='  border flex flex-col justify-center items-center'>
                <div>
                  <p>Ainda não possuo Feedbacks :&#40;</p>
                  <Button onClick={() => window.open('https://feedbacks-page-two.vercel.app/', "_blank")}>Deixe seu Feedback aqui</Button>
                </div>
              </div >
            </>
          )
        }
      </ul >


    </div >
  );
}
