let matrix = []


for (let i = 0; i < 2; i++) {
  matrix[i] = []
  for (let j = 0; j < 2; j++) {
    matrix[i][j] = parseFloat(prompt(`Digite o valor para a posição [${i + 1}][${j + 1}] da matriz`))
  }
  
}
let numberA = matrix[0][0]
let numberB = matrix[0][1]
let numberC = matrix[1][0]
let numberD = matrix[1][1]

let determinant = (numberA * numberD)-(numberB * numberC)

console.log("Matriz:");
console.log(matrix[0]);
console.log(matrix[1]);
console.log("Determinante:", determinant);