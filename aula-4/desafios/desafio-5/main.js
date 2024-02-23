let yearInput = parseInt(prompt("Digite um ano: "))

if(!isNaN(yearInput) && yearInput > 0){
    if(yearInput %4 === 0 && yearInput %100 !== 0 || yearInput %400 === 0){
        console.log(`O ${yearInput} é um ano bissexto.`);
    }else {
        console.log(`O ${yearInput} não é um ano bissexto.`);
    }
}else{
    console.log("Insira um ano válido")
}