const numbers = [3, 8, 15, 21, 30, 37, 42];

const pairNumbers = numbers.filter(number => number %2 === 0)

console.log(`Números originais: ${numbers}`);
console.log(`Números pares: ${pairNumbers}`);