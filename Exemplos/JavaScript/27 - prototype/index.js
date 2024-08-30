//Objeto Literal

let a1 = {
    cor: 'branco',
    modelo: 'AirBus a380',
    levantarVoo: function(){
        console.log('levantar Voo')
    }
}

//Função Construtora
let AviaoF = function(){
    this.cor = 'azul',
    this.modelo = "boing 787",
    this.levantarVoo = function(){
        console.log('levantar Voo')
    }
}

let a2 = new AviaoF()

//Classe
class AviaoC{
    constructor(){
        this.cor = 'vermelho',
        this.modelo = 'Embraer E-Jets'
    }
    levantarVoo(){
        console.log('Levantar Voo')
    }
}

let a3 = new AviaoC();

console.log(a1, a2, a3)

//Agora vamos analisar a herança de prototype Chain
//Enquanto não é definida a herança, todos os objetos são filhos de Object.prototype

let animal = {
    attr: 'a',
}

let vertebrado = {
    attr2: 'b'
}

let ave = {
    //Dessa forma estabelecemos uma relação de herança entre ave e vertebrado, pois agora ave é protótipo de vertebrado
    __proto__: vertebrado,
    attr3: 'c'
}

console.log(vertebrado.attr1) // isso dará um erro
console.log(ave.attr2) // Isso não dará erro
