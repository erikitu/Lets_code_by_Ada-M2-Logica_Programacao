let browser = ""
let operatingSystem = ""

browser = prompt("Qual o seu navegador?").toLowerCase()
operatingSystem = prompt("Qual o seu sistema operacional?").toLowerCase()

if (browser == "chrome" || browser == "firefox") {
  if(operatingSystem =="windows" || operatingSystem =="mac") {
    console.log("Plataforma compatível.")
  }
}else {
  console.log("Plataforma não compativel.")
}