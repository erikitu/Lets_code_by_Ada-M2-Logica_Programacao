let age = 0
let salary = 0
let creditScore = 0


age = parseInt(prompt("Qual a sua idade?"))
salary = parseFloat(prompt("Qual o seu salario?"))
creditScore = parseInt(prompt("Qual score de crédito?"))

if (age >= 18 && creditScore >= 700 && salary >= 5000) {
  console.log(`Credito aprovado`)
}else {
  console.log(`Credito não aprovado`)
}