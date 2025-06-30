'use client'
import { ArrowUp, Verified } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const Input = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("")


  useEffect(() => {
    if (containerRef.current && textareaRef.current) {
      containerRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  function sendText() {


  }

  return (
    <div className="w-full border  border-red-600 flex justify-center items-center h-full">
      <div
        ref={containerRef}
        style={{ border: '2px solid #29292D' }}
        className=" flex flex-col justify-between py-1 px-5
       w-[80dvw] h-[10dvh] bg-bg-secondcolor text-gray-100 rounded-3xl">

        <TextareaAutosize placeholder="Digite Sua Mensagem"
          onChange={(e) => setText(e.target.value)}
          minRows={1}
          maxRows={6}
          value={value}
          className="w-full h-full  py-2
            appearance-none outline-none shadow-none overflow-hidden " />


        <section>
          <ul className='flex justify-between gap-4'>
            <li>+</li>
            <li
              onClick={sendText}
            > {
                text.length > 0 ? (
                  <ArrowUp />
                ) : (<Verified />)
              }</li>
          </ul>
        </section>
      </div>
    </div >
  )
}

export default Input
