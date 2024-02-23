let sum = 0
let diceNumbers = prompt("Digite o numero de dados a serem lançados: ")
let diceSides = prompt("Digite o numero lados de cada dado:  ")
console.log(`Quantidade de dados: ${diceNumbers}`)
console.log(`Quantidade de lados nos dados: ${diceSides}`)
console.log("Rolagens individuais:")
for(let i = 0; i < diceNumbers;i++){
      let rolledValue = (Math.floor(Math.random()*diceSides)+1)  
      console.log(`${i+1}º dado: ${rolledValue}`)
      sum += rolledValue
}
console.log(`Soma dos Valores: ${sum}`)