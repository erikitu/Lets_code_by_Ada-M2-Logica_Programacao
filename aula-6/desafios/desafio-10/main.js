let sum = 0
let diceNumbers = prompt("Digite o numero de dados a serem lançados: ")
console.log(`Quantidade de dados: ${diceNumbers}`)
console.log("Rolagens individuais:")
for(let i = 0; i < diceNumbers;i++){
      let rolledValue = (Math.floor(Math.random()*6)+1)  
      console.log(`${i+1}º dado: ${rolledValue}`)
      sum += rolledValue
}
console.log(`Soma dos Valores: ${sum}`)