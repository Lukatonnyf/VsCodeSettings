const arrayNumbers = [2, 4, 8, 16]
const initialValue = 0;

const soma = arrayNumbers.reduce((accumulator, currentValue) => accumulator + currentValue,
initialValue)
console.log(soma)
