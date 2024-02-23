let size = prompt("Digite o tamanho do array: ")
let novoArray = []
for(let i = 0; i < size; i++){
     novoArray[i] = prompt(`Digite o ${i+1}º valor para armazenar no array: `)
}
let arrayOrdenado = novoArray.sort()

console.log(`Array Ordenado: ${arrayOrdenado}`)