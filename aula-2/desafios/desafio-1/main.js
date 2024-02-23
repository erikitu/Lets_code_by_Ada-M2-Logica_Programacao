let number1, number2;

number1 = parseInt(prompt("Digite o primeiro numero:"))
number2 = parseInt(prompt("Digite o segundo numero:"))

let results = [
  number1+number2,
  number1-number2,
  number1*number2,
  number1/number2
]

console.log("Soma: ", results[0])
console.log("Subtração: ", results[1])
console.log("Multiplicação: ", results[2])
console.log("Divisão: ", results[3])