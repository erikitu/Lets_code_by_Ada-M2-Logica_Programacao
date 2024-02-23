let number, sum = 0
do{
    number = parseInt(prompt("Digite um número para calcular a soma (Digite '0' para sair): "));
    sum +=number
}while(number != 0)
console.log(`A soma dos numeros digitados é: ${sum}`)