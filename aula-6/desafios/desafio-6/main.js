const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numberToFind = parseInt(prompt("Digite o numero para procurar no array: "))
let findedNumber = false

for (let i = 0; i < array.length; i++) {
    if (array[i] === numberToFind) {
      findedNumber = true
        console.log(`Número ${numberToFind} encontrado na posição ${i}.`);
        break 
    }
}

if (!findedNumber) {
    console.log(`Número ${numberToFind} não encontrado no array.`)
}