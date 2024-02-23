let letter = prompt("Digite uma letra: ").toLowerCase();
    if(/^[a-z]$/.test(letter)){
     switch (letter) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            console.log(`${letter} é vogal.`);
            break;
        default:
            console.log(`${letter} é consoante.`);
            break;}       
    }else {
        console.log("Insira uma letra válida")
    }