let number = parseInt(prompt("Digite um número: "));

if (!isNaN(number)) {
    switch (number % 2) {
        case 0:
            console.log(`${number} é par.`);
            break;
        case 1:
            console.log(`${number} é ímpar.`);
            break;
        default:
            console.log(`${number} não é nem par nem ímpar.`);
            break;
    }
} else {
    console.log("Por favor, insira um número válido.");
}