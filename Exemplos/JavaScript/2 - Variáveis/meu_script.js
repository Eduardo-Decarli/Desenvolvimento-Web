//String
var umaString = "Olá mundo"

//number
var numero = 8
var numeroFracionado = 10.75

//Boolean
var bool = true

//Objeto
var pessoa = { nome: "Eduardo", idade: 20, altura: 1.80 }

//Arrays
var array = [1, 2, 3, 4, 5]

//funções
var funcao = function () {
    return "olá mundo";
}

//Existem 3 escopos: Global, função e bloco
//Se a variavel for criada no escopo global, ela poderá ser acessada por qualquer função ou bloco
//Se a variavel for criada no escopo de função, só poderá ser acessada dentro daquela função
//Se a variavel for criada no escopo de bloco, ela ficará no escopo de bloco, mas poderá ser elevada ao escopo global, caso seja chamada no escopo global após sua criação.

//Escopo Global
function x() {
    //Escopo de função
    if (true) {
        //Escopo de bloco
    }
}
if (true) {
    //Escopo de bloco
}

//o termo var derifa de variavel
var x = 5

//o termo let é uma variavel cujo escopo é de bloco
//se let for declarado dentro de um bloco, ele não poderá ser utilizado ou alterado fora dele e não sofrerá hoisting

let y = 10;

//Constantes
//uma variavel definida como const não pode ser reatribuida,
//seu valor será constante e deverá ser dado no momento da declaração
const PI = 3.1415
PI = 3.14; // Isso dará um erro
PI = PI + 10 // Isso também dará um erro




