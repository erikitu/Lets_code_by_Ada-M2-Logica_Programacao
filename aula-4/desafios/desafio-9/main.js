let month = prompt("Digite o mês: ").toLowerCase();
    if(/^[a-z]+$/.test(month)){
     switch (month) {
        case "dezembro":
        case "janeiro":
        case "fevereiro":
            console.log(`${month} é Inverno.`);
            break;
        case "março":
        case "abril":
        case "maio":
            console.log(`${month} é Primavera.`);
            break;
        case "junho":
        case "julho":
        case "agosto":
            console.log(`${month} é Verão.`);
            break;
        case "setembro":
        case "outubro":
        case "novembro":
            console.log(`${month} é Outono.`);
            break;
}
    }else {
        console.log("Insira uma letra válida")
    }