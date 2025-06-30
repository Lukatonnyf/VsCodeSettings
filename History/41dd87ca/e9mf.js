let name = "Tonny"


function findFirstOccurrence(name){
  for(let i = 0; i < name.length; i++){
    if(name[i] == "T"){
      return i
    }
  }
  return -1
}

console.log("O primeiro índice do array é: " + findFirstOccurrence(name))
// for(let L = 0; L < name.length; L++){
  // console.log("O valor total de Índices do array é:" + L)
// }
