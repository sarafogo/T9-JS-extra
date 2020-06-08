// Dado uma lista:
const listaNomes = ["Jeniffer", "Fernanda", "Amanda", "Marcela", "Beatriz"]

/*Remova a última posição que é o nome Beatriz.

Em seguida, mostre no console.log*/

const procurar = listaNomes.indexOf('Beatriz')
console.log(procurar)

const remove = listaNomes.splice(4)

console.log(remove)

console.log(listaNomes)