const input = document.getElementById('number')
const button = document.getElementById('button')


function For(){

  let num = input.value
  try{
    for(num; num <= 10; num++){
      console.log(num)
    }
  }catch(error){
  console.log("ouve um erro inesperado")
  console.log(error)
}
}

button.onclick = (e) => {
    e.preventDefault()
  For()
  console.log(For())
}
