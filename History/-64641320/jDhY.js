const input = document.getElementById('number')
const button = document.getElementById('button')


function For(e){
  e.preventDefault()
  let num = input.value
try{
    for(num; num <= 20; num++){
    console.log(num)
  }
}catch(error){
console.log("ouve um erro inesperado")
  console.log(error)
}
}

button.onclick = () => {
  For()
  console.log(For())
}
