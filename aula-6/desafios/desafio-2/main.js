const pessoa = {
    nome: "Eric",
    idade: 37,
    cidade: "Quixeramobim"
}
for (let propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
}