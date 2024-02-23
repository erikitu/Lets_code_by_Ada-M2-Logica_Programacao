let num = parseInt(prompt("Escolha um numero: "))
console.log(`Tabuada do ${num}`)
for(let i = 1; i <= 10; i++){
    console.log(`${num} x ${i} = ${i * num}`)
}