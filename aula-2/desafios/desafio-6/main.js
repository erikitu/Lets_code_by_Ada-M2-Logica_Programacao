const names = ["Alice", "Bob", "Eva", "John", "Daniel", "Isabel"];

const FilteredNames = names.filter(name => name.length >= 5);

console.log(`Nomes originais: ${names}`);
console.log(`Nomes com 5 letras ou mais: ${FilteredNames}`);