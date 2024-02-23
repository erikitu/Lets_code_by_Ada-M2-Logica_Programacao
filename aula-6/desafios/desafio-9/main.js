let novoArray = [1, 7, 2, 8, 3, 4, 5, 0, 9];

for (let i = 0; i < novoArray.length; i++) {
    for (let j = 0; j < novoArray.length - 1; j++) {
        if (novoArray[j] > novoArray[j + 1]) {
            let tempNum = novoArray[j];
            novoArray[j] = novoArray[j + 1];
            novoArray[j + 1] = tempNum;
        }
    }
}

console.log("Array em ordem crescente:", novoArray);