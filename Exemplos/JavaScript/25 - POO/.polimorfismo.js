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
        super(cor, tamanho, peso)
        this.pico = bico
    }

    voar(){

    }
}

class Papagaio extends Passaro{
    constructor(sabeFalar, cor, tamanho, peso){
        super('medio', cor, tamanho, peso);
        this.sabeFalar = sabeFalar;
    }
    falar(){
        console.log('falar');
    }
}

class Avestruz extends Passaro{
    constructor(){
        super('grande', 'branco e preto', 250, 15000)

    }

    enterrarCabeça(){

    }

    //Se declararmos expressamente uma função herdada, podemos alterar ela a vontade, isso seria o conceito de polimorfismo, funções polimorficas
    voar(){
        console.log('não sabe voar')
    }
}
let passaro = new Passaro();
let papagaio = new Papagaio(true, 'verde', 25, 350);
let avestruz = new Avestruz()


avestruz.voar();


 