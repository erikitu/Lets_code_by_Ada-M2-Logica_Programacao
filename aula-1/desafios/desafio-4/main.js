let age = 0
let minimumPurchase = 0
let isNewClient = 0


age = parseInt(prompt("Qual a sua idade?"))
minimumPurchase = parseFloat(prompt("Digite o valor da compra?"))
isNewClient = parseInt(prompt("Já é nosso cliente? (Digite 1-para sim ou 2-para não)"))

if (age >= 60 && minimumPurchase >= 100) {
  if(isNewClient == 2) {
    console.log("É elegível para desconto")
  }
}else {
  console.log("Não elegível para desconto")
}