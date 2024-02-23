let numberInput, bigger = 0

for(let i = 0; i < 3; i++){
    numberInput = parseInt(prompt(`Digite o ${i+1}º número: `))
    if(numberInput >= bigger){
        bigger = numberInput
    }   
}
console.log(`Dos 3 numeros digitados, o maior deles é o ${bigger}`)