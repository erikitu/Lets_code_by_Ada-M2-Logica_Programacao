let age = 0
let nacionality = ""

age = parseInt(prompt("Qual a sua idade?"))
nacionality = prompt("Qual a sua nacionalidade?").toUpperCase()

if (age < 16 || nacionality != "BRASILEIRA") {
  console.log(`Infelizmente você não pode votar`)
}else {
  console.log(`Parabens você pode votar`)
}