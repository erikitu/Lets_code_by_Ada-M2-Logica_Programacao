let triangle = [];
let sideA,sideB,sideC

for (let i = 0; i < 3; i++) {
    triangle[i] = parseFloat(prompt(`Digite o valor do ${i + 1}º comprimento do triângulo: `));
}
sideA = triangle[0]
sideB = triangle[1]
sideC = triangle[2]

if (sideA === sideB && sideB === sideC) {
    console.log("Triângulo equilátero");
} else if (sideA ===sideB || sideA === sideC || sideB === sideC) {
    console.log("Triângulo escaleno");
} else {
    console.log("Triângulo isósceles");
}