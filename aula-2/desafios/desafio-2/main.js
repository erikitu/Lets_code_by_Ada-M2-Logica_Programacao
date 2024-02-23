let testResults = []
let averageResults, testTotalSum = 0
for(let i = 0; i < 3; i++){
  testResults[i] = parseFloat(prompt(`Digite a ${i+1}ª Nota`)).toFixed(1)
}

for (let i = 0; i < testResults.length; i++) {
  testTotalSum += parseFloat(testResults[i]);
}
averageResults = parseFloat(testTotalSum/testResults.length).toFixed(1)

console.log(`Notas digitadas: ${testResults}`)
console.log(`Média do Aluno: ${averageResults}`)