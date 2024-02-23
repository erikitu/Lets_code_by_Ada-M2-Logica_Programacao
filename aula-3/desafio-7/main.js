/**
 * Desafio 07
Crie um mapa chamado frutas onde as chaves são nomes de frutas e os valores 
são seus preços. 
Verifique se a maçã é mais cara que a banana
Verifique se a pêra não custa o mesmo que a uva
 */

const frutas = new Map([
  ['maçã', 2.50],
  ['banana', 1.80],
  ['pêra', 2.00],
  ['uva', 2.20]
]);

if(frutas.get('maçã') > frutas.get('banana')){
  console.log("A maçã está mais cara que a banana")
}else {
  console.log("A banana está mais cara que a maçã")
}
if(frutas.get('pêra') === frutas.get('uva')){
  console.log("As frutas pera e uva tem o mesmo preço")
}else {
  console.log("As frutas pera e uva não tem o mesmo preço")
}