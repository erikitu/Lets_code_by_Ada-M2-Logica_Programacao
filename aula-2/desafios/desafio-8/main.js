const ages = [15, 22, 17, 20, 30, 12];

let lastIndex = -1;

for (let i = ages.length - 1; i >= 0; i--) {
    if (ages[i] >= 18) {
      lastIndex = i;
        break;  
    }
}

console.log(`Idades: ${ages}`);
console.log(`Índice do último elemento maior ou 
igual a 18: ${lastIndex}`);