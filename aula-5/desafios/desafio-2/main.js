let question = true;

while(question){
    let response = prompt("Digite um numero inteiro positivo válido ou digite 'sair' para sair. ")
    if (response.toLowerCase() === 'sair') {
        question = false;
    } else {
       let number = parseInt(response)
        if(number < 0 || isNaN(number)){
            console.log("Insira um numero positivo válido")
        } else {
            let primeNumber = true;
            if(number <= 1){
                primeNumber = false
            } else {
                for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                    primeNumber = false;
                    break;
                }
            }
        }
        if (primeNumber) {
               console.log(`${number} é um número primo.`);
            } else {
               console.log(`${number} não é um número primo.`);
            }
     }
    }
}