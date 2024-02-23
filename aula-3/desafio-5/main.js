/*
Desafio 05
Crie um objeto chamado pessoa com as propriedades nome, idade, e cidade. 
Verifique se a pessoa tem 18 anos ou mais (Exibir apenas true ou false)
Verifique se a pessoa não é de uma cidade chamada "São Paulo" (True ou False)
*/

let pessoa = {
  nome:'Eric',
  idade: 37,
  cidade: 'Quixeramobim'
}

console.log(`Nome: ${pessoa.nome}`)
console.log(`18 anos ou mais: ${pessoa.idade >= 18}`)
console.log(`É de São Paulo: ${pessoa.cidade === "São Paulo"}`)