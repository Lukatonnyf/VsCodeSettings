const input = document.getElementById('number')
const button = document.getElementById('button')


function For(e){
  e.preventDefault()
  let num = input.value
  for(num; num <= 20; num++){
    console.log(num)
  }
}

button.onclick = () => {
  For()
  console.log(For())
}
