class Animal{
    constructor(cor, tamanho, peso){
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }

    dormir(){
        console.log('dormir')
    }
}

class Passaro extends Animal{
    constructor(bico, cor, tamanho, peso){
        //O super é uma função que nos dá acesso ao construtor da classe pai, assim podemos garantir os atributos e métodos da super classe
        //Então aqui a função super chama o atributo cor, tamanho e peso da superclasse e o construtor passa a sincronizar os parametros
        super(cor, tamanho, peso)
        this.pico = bico
    }

    voar(){

    }
}

//Aqui temos uma classe herdada de passaro e consecutivamente irá extender de animal também
class Papagaio extends Passaro{
    constructor(sabeFalar, cor, tamanho, peso){
        //Aqui o super puxa o construtor de Passaro que se tornou superclasse de papagaio e sincroniza os parametros com o construtor de papagaio
        super('medio', cor, tamanho, peso);
        this.sabeFalar = sabeFalar;
    }
    falar(){
        console.log('falar');
    }
}

let passaro = new Passaro();
let papagaio = new Papagaio(true, 'verde', 25, 350);

papagaio.dormir()
papagaio.falar()

 