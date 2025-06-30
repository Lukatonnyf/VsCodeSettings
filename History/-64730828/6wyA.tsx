import { useEffect, useState } from "react";

export default function Test(){
        /** 🎯 Resumo Função Idade
         *  O código pega a o ano atual, e subtrai o valor setado em nascimento.
         *  Exemplo: 
            let idade = anoAtual.getFullYear() - nascimento.getFullYear();
    
         * Já o if(), checa os valores das outras propiedades, como por exemplo,
           o mês e o dia, ele segue a seguinte lógica:
           
         => Se o mês atual for menor que o nascimento, e o atual for menor que o dia 
         do nascimento, ele vai subtrair 1 ano da idade atual.
    
            MAS PORQUE?
    
            ==> se eu deixasse a idade sem subtrair um, e sem essas condições, ela
            iria colocar que eu já tenho 18 anos, oque não é verdade, pois só completo
            essa idade em setembro
         */
      const [idade, setIdade] = useState(0);
      useEffect(() => {
                const nascimento = new Date(2007, 8, 16);
                const anoAtual = new Date();
                let idadeCalculada = anoAtual.getFullYear() - nascimento.getFullYear();
        
                if (anoAtual.getMonth() < nascimento.getMonth() || 
                    (anoAtual.getMonth() === nascimento.getMonth() && anoAtual.getDate() < nascimento.getDate())) {
                    idadeCalculada--;
                }
                setIdade(idadeCalculada);
            }, []);

    return(           
        <div className="flex flex-col text-danger min-w-full overflow-auto  ">  
                <h1 className="flex gap-1">export default function
                  <span className="text-purple">AboutMe</span>
                    <strong className="text-tags">&#40;&#41; &#123;</strong> </h1>
                    <h2 className="flex flex-col pl-2 text-metodos">
                      const aboutMe = &#123; <br/>

                    <p className="w-full pl-2 text-gray-400">name: 
                      <span className=" text-items-array"> &#34;Lukatonny Ferreira&#34;</span>,
                    </p>

                    {/* Role */}
                    <p className="w-full pl-2 text-gray-400">role:          
                     <span className="p-1 text-items-array">
                        &#34;Front end developer&#34;
                     </span>, 
                    </p>

                        {/* span age */}
                        <p className="w-full pl-2 text-gray-400">age: 
                                <span className="p-1 text-metodos">
                                      {
                                       idade
                                      }
                                </span>
                        </p>
                     &#125;
                </h2>    
        </div>
    )
}