let umaString = 'Um texto'
// umaString = 'Um "texto"'
// umaString = 'Um \'texto\'' // Escapar
// umaString = "Um \"texto\""
// umaString = "Um \\texto"
console.log(umaString)
console.log(umaString[4])
console.log(umaString.charAt(6))
console.log(umaString.concat(' nota 10'))
console.log(umaString.indexOf('texto'))
console.log(umaString.match(/[a-z]/g)) // Retorna os textos minúsculos
console.log(umaString.replace('Um', 'Outro'))
console.log(umaString.slice(2, 6))
console.log(umaString.split(' '))