const arrayTest = [2, 4, 8, 16]
const initialValue = 0;

const somaTest = arrayTest.reduce((acumulator, currentValue) => acumulator + currentValue,
initialValue)

console.log(somaTest)
