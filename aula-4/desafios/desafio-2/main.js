let noteInput

noteInput = parseInt(prompt("Digite um número: "))
if(noteInput >= 90){
    console.log(`Aprovado com mérito`)
}
else if(noteInput >= 70 && noteInput <= 90){
    console.log(`Aprovado`)
}else {
    console.log(`Reprovado`)
}