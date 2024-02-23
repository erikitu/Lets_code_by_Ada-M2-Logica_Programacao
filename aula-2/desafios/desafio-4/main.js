let coordX = []
let coordY = []
let size = 0
function scalarProductCalc(coordX,coordY){
  let result = 0
  for (let i = 0; i < size; i++) {
    result += coordX[i] * coordY[i]    
  }

  return result
}

size = prompt("Digite o tamnho dos vetores")

for (let i = 0; i < size; i++) {
  coordX[i] = prompt(`Digite o valor da ${i+1}ª coordenada X`)
  coordY[i] = prompt(`Digite o valor da ${i+1}ª coordenada Y`)
}

let ScalarProductResult = scalarProductCalc(coordX,coordY)

console.log(`Coordenadas X: ${coordX}`)
console.log(`Coordenadas Y: ${coordY}`)
console.log(`Produto Escalar: ${ScalarProductResult}`)