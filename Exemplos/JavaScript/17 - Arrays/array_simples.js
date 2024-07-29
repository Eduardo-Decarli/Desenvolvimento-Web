//Arrays são variaveis que referenciam o objeto Array()
//com isso pode-se criar listas de valores dentro de uma mesma variavel

var lista_frutas = new array();

lista_frutas[1] = 'maçã'
lista_frutas[2] = 'uva'
lista_frutas[3] = 3 + ' Tomates'
lista_frutas[4] = true

//Um objeto array também pode ser escrito de outra forma

var lista_legumes = []

lista_legumes[1] = "alface"
lista_legumes[2] = "espinafre"

//Ou até mesmo utilizar o próprio objeto para referenciar os itens

var lista_mercado = new array('agua', 'peixe', 'carne', 'pizza')

// podemos também utilizar a propriedade length para retornar o tamanho do array

console.log(lista_frutas.length) // retornará o tamanho do array