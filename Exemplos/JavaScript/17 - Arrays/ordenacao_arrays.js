var lista_frutas = Array()

lista_frutas[0] = 'banana'
lista_frutas[1] = 'maça'
lista_frutas[2] = 'laranja'
lista_frutas[3] = 'morango'

//Ordenação em ordem alfabética para strings e char
console.log(lista_frutas.sort())

//Para ordenar numeros o processo necessitará de uma funçao
var lista_numeros = Array()

lista_numeros[0] = 9
lista_numeros[1] = 6
lista_numeros[2] = 48
lista_numeros[3] = 24

console.log(lista_numeros.sort(ordenaNumeros))

function ordenaNumeros(a, b){
    return a - b
    // < 0 = a ordenação antes de b
    // > 0 = b ordenação antes de a
    // == a ordem é mantida
}