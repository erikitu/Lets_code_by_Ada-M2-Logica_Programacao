let sequencia = [1,1]
let entrada = parseInt(prompt("Digite um numero que deseja ver a sequencia Fibonnaci: "))
for(let i = 2; i < entrada; i++) {
  sequencia[i] = sequencia[i-1] + sequencia[i-2]
  sequencia.slice(0,entrada)
}
console.log(sequencia)