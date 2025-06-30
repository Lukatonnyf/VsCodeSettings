'use client'
import { ArrowUp, Search, Verified } from 'lucide-react';
import Input_ from 'postcss/lib/input';
import { useEffect, useRef, useState } from 'react';
import Input from 'react-input-autosize';

const Input = () => {
  // const containerRef = useRef<HTMLDivElement>(null);
  // const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("")


  // useEffect(() => {
  //   if (containerRef.current && textareaRef.current) {
  //     containerRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  //   }
  // }, [text]);

  function sendText() {


  }

  return (
    <div className=" w-full  flex justify-center items-center h-full">
      <div
        // ref={containerRef}
        style={{ border: '2px solid #29292D' }}
        className=" flex flex-row justify-center items-center gap-2 py-1 px-2
       w-full bg-bg-secondcolor text-gray-100 rounded-3xl">


        <Search />
        <Input
          placeholder="Digite Sua Mensagem"
          onChange={(e) => setText(e.target.value)}
          minRows={1}
          maxRows={1}
          value={text}
          className="w-full h-full py-2 appearance-none outline-none shadow-none overflow-hidden overflow-y-hidden"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        />

      </div>
    </div >
  )
}

export default Input
