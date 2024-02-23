/*
Crie um objeto chamado aluno com as propriedades nome, nota1, e nota2. 
Calcule a média das notas. 
Verifique se a média é maior ou igual a 7 usando operadores de comparação.

*/
const aluno ={
  nome:"Eric",
  nota1: 9.5,
  nota2: 7, 
}
let average = (aluno.nota1 + aluno.nota2) / 2
if(average >= 7){
  console.log(`O aluno ${aluno.nome} esta com média ${average} e está aprovado!`)
} else {
  console.log(`O aluno ${aluno.nome} esta com média ${average} e está reprovado!`)
}