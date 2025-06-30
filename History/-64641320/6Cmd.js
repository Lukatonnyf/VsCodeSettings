const input = document.getElementById('number')
const button = document.getElementById('button')


function For(){

  let num = input.value
  try{
    throw 'erro gerado'
    for(num; num <= 10; num++){
      console.log(num)
    }
  }catch(error){

  console.log(error)
}
}

button.onclick = (e) => {
    e.preventDefault()
  For()

}
