let randomNumber = parseInt(Math.floor(Math.random()*100)+1)
let tryNumber
let attempts = 5
console.log("Pensei em um número, Tente descobrir!")
console.log("Você tem 5 chances!")

do{
    tryNumber = parseInt(prompt("Qual o seu palpite? "))
    if(isNaN(tryNumber)){
        console.log("Insira um número válido")
    }else {
        attempts--

        if (tryNumber > randomNumber) {
            console.log("Quaaaaaase! O número pensado é menor.");
        } else if (tryNumber < randomNumber) {
            console.log("Quaaaaaase! O número pensado é maior.");
        }

        if (attempts > 0) {
            console.log(`Restam ${attempts} ${attempts === 1 ? 'chance' : 'chances'}.`);
        }
    }
    }while(tryNumber !== randomNumber && attempts > 0)
if(tryNumber === randomNumber){
    console.log(`Parabens! Você acertou! O numero pensado foi ${randomNumber}`)
}else {
    console.log(`Que pena, não foi dessa vez! O numero pensado foi ${randomNumber}`)
}