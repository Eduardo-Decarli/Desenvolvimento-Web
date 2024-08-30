//o destructuring de objetos é feito da seguinte forma

//Primeiro fazemos um objeto, no caso será um objeto literal
let produto = {
    nome: 'notebook',
    preco: 850, 
    detalhes: {
        marca: 'xyz',
        fabricante: 'abc'
    }
}

//Os tokes utilizados serão as chaves, o destructure trabalha da seguinte forma
//vetores => []
//Objetos => {}

//Agora vamos capturar nome e preco do objeto produto
let {nome, preco} = produto

//Podemos também fazer a atribuição desses valores para outras variaveis
let {nome: varNome, preco: varPreco} = produto
//Dessa forma armazenamos o valor de nome na variavel varNome e o valor de preco na variavel varPreco

//podemos atribuir valores default tambpem, caso a variavel não exista ainda ou não tenha valor
/*
let {nome = 'joao', preco = 1000} = produto
*/

//e podemos acessar objetos dentro de objetos
let {detalhes: {marca: varMarca, fabricante = 'fjk'}} = produto



