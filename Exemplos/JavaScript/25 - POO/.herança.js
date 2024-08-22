class Animal{
    constructor(){
        this.cor = ""
        this.tamanho = null
        this.peso = null
    }

    dormir(){
        console.log('dormir')
    }
}
//O termo extends estende uma classe de outra
//Isso quer dizer que cachorro agora tem todos os atributos e métodos de animal e também os próprios
class Cachorro extends Animal{
    constructor(){
        super()
        this.orelhas = "grandes e caidas"
    }

    correr(){
        console.log('Correr')
    }

    rosnar(){
        console.log('rosnar')
    }
}
class Passaro extends Animal{
    constructor(){
        super()
        this.pico = 'curto'
    }

    voar(){

    }

}

//Aqui temos uma classe herdada de passaro e consecutivamente irá extender de animal também
class Papagaio extends Passaro{
    constructor(){
        super();
        this.sabeFalar = true
    }
    falar(){
        console.log('falar');
    }
}

let cachorro = new Cachorro();
let passaro = new Passaro();
let papagaio = new Papagaio();

papagaio.dormir()
papagaio.falar()

 