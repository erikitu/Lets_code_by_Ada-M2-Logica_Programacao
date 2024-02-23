const ages = [15, 22, 17, 20, 30, 12];

const greaterOrEqual18 = ages.findIndex(age => age >= 18);

console.log(`Idades: ${ages}`);
console.log(`Índice do primeiro elemento maior ou igual a 18 ${greaterOrEqual18}`);