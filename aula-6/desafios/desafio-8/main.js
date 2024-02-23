let palavra = prompt("Digite uma palavra").toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
let contador = 0
let sequencia = palavra.split('')
for(let i=0;i<palavra.length;i++){
 if(palavra[i] === "a"||palavra[i] === "e"||palavra[i] === "i"||palavra[i] === "o"||palavra[i] === "u"){
  contador++
 }
}

console.log(`A palavra ${palavra} tem como letras: ${sequencia} possui ${contador} vogais`)