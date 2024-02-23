let randomNumber = parseInt(Math.floor(Math.random()*100)+1)
let tryNumber
console.log("Pensei em um número, Tente descobrir!\n")

do{
    tryNumber = parseInt(prompt("Qual o seu palpite? "))
    if(isNaN(tryNumber)){
        console.log("Insira um número válido")
    }else if(tryNumber > randomNumber){
        console.log("Quaaaaaase! O numero pensado é menor")
    }else if(tryNumber < randomNumber) {
        console.log("Quaaaaaase! O numero pensado é maior")
    }
    
}while(tryNumber !== randomNumber)
console.log(`Parabens! Você acertou! O numero pensado foi ${randomNumber}`)