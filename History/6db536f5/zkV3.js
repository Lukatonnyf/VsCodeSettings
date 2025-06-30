const array = [1, 2, 3, 4, 10]


for(let i = 0; i < array.length; i++){
  const cont = array[i] *= array[i]
  console.log(cont)
}



// Outro meio de fazer o mesmo cálculo deixando o usuário escolher
// a fórmula seria:
const func = () =>  n * n

function mult(array, func){
  for(let i = 0; i < array.i; i++){
    array[i] = func(array[i])

  }
  return array
}

console.log("segundo jeito: \n" + mult(array, func))


