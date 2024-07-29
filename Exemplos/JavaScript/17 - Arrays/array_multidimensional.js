//Arrays multidimensionais são arrays dentro de outros arrays, formando uma estrutura maior

var lista_mercado = new Array();

lista_mercado[1] = frutas['maça', 'banana', 'goiaba']
lista_mercado[2] = pessoas['jose', 'maria', 'carlos']

// ou podemos fazer desta forma
var lista_coisas = new Array()

lista_coisas['frutas'] = new Array()
lista_coisas['frutas'][1] = 'maças'
lista_coisas['frutas'][2] = 'bananas'