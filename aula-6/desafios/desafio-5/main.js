const valores = { valor1: 10, valor2: 20, valor3: 30, valor4: 40 }
let sum = 0
for(let valor in valores){
    sum += valores[valor]
}
console.log(`Soma dos valores: ${sum}`)