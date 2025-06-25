/*
Wellington Sousa tem 63 anos, pesa 65 kg
tem 1.67 de altura e seu IMC é de 25.92592592
Wellington nasceu em 1961
*/
const nome = 'Wellington'
const sobrenome = 'Sousa'
const idade = 63
const peso = 65
const altura = 1.67
let imc // peso / (altura * altura)
let anoNascimento

anoNascimento = 2025 - 63
imc = 65 / (1.67 * 1.67)

// console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg')
// console.log('tem', altura, 'de altura e seu IMC é de', imc)
// console.log(nome, 'nasceu em', anoNascimento)

// Com template string
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg`)
console.log(`tem ${altura} m de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)
