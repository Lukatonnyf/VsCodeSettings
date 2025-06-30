const input = document.getElementById('number')
const button = document.getElementById('button')


function For(){

  let num = input.value
  try{
    throw 'erro gerado'
    for(num; num <= 10; num++){
      console.log(num)
    }
  }catch(e){
  console.log(e)
}
}

button.onclick = (e) => {
    e.preventDefault()
  For()

}



const names = ['tonny', 'é', 'lindo', 'demais']

  for(let i = 0; i < names.length; i++){
    console.log(names[i])
  }


// for OF, melhor que o exemplo anterior
/** @FOR OF
 * explicação
  Criamos uma variável interna de índices dentro do for,
   para percorrer a quantidade total de íncides de todo
   o array e retorna o índice CORRENTE para a váriavel

   EXEMPLO:

  for(const name of names){
    console.log(name)
  }

   const name === ( A VARIÁVEL QUE PERCORRE OS ÍNDICES)
   OF === (ÍNDICA O ARRAY QUE DEVE PERCORRER)
   name === (LOGO APÓS, A VARIÁVEL RECEBE O ÍNDICE CORRENTE)
 */



// For In, Retorna sempre a Propiedade do OBJETO
/** @FOR In
 * explicação:
  Ele itera sobre um OBJETO, assim como no array,
  porém, por padrão, ele sempre vai retorna a PROPIEDADE
  do objeto

  EXEMPLO:
 const person = {
  name: 'tonny',
  age: 17
 }

  for(const prop in person){
    console.log(name)
  }

   const name === ( A VARIÁVEL QUE PERCORRE OS ÍNDICES)
   OF === (ÍNDICA O ARRAY QUE DEVE PERCORRER)
   name === (LOGO APÓS, A VARIÁVEL RECEBE O ÍNDICE CORRENTE)
 */

