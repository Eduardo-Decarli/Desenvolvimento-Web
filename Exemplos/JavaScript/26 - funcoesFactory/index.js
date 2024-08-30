//Funções Factory em JavaScript são funções que retornam objetos.
//Dessa forma pode-se criar funções que retornam objetos para variaveis

//para evitar criar varios objetos que sinalizam um mesmo contexto, como por exemplo, não precisar criar um Bicicleta2
let bicicleta1 = {
    cor: 'branca',
    marcha: 'unica',
    aro: 12,
    pedalar() {
        console.log('pedalando')
    }
}

//-----------------------------------
//Aqui temos uma variavel que recebe uma função que retorna um objeto

let bicicletaFactory = function(cor, marcha, aro){
    return{
        cor: cor,
        marcha: marcha,
        aro: aro,
        pedalar() {
            console.log('pedalando')
        }
    }
}

let bicicleta2 = bicicletaFactory('vermelho', '18', 26)
console.log(bicicleta2.cor)

