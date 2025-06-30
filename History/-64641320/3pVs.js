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



const names = [ 'tonny', 'é', 'lindo', 'demais']

for(let i = 0; i < names.length; i++){
  console.log(names[i])
}
