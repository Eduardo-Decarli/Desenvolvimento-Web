//Modelo do Objeto
class ContaBancaria{
    //atributos
    //numeroConta
    //saldo
    //limite

    constructor(){
        this.agencia = 1075
        this.numeroConta = 8847569
        this.saldo = 50
        this.limite = 450
    }

    //Métodos 
    depositar(valorDeposito) {
        this.saldo += valorDeposito
    }

    sacar(valorSaque) {
        this.saldo -= valorSaque
    }

    consultarSaldo() {
        return this.saldo
    }
 
}

//Instanciação da Classe
let x = new ContaBancaria()
let y = new ContaBancaria()

console.log(x.consultarSaldo())
x.depositar(450)
console.log(x.consultarSaldo)
x.sacar(200)
console.log(x.consultarSaldo)

//Software para uma Marcenaria
//possui cadeiras e sofas

//Paradigma procedural

//cadeira
let qtde_pernas = 4
let giratoria = false
let cor = 'azul'

function girar_cadeira(){
    if(giratoria === true){
        console.log("Girou")
    }else{
        console.log("Não é giratória")
    }
}

//Paradigma OO

class Cadeira{
    constructor(qtde_pernas, giratoria,cor){
        this.qtde_pernas = qtde_pernas
        this.giratoria = giratoria
        this.cor = cor
    }

    girarCadeira(){
        if(this.giratoria === true){
            console.log("Girou")
        }else{
            console.log("Não é giratória")
        } 
    }
}


class sofa{
    constructor(qtdePernas, material, cor){
        this.qtdePernas
        this.material = material
        this.cor = cor
    }

    sofaDeAlgodao(){
        if(this.material === 'algodao'){
            console.log('o sofá é de algodao')
        }else{
            console.log("o sofa é de outro material")
        }
    }

}

let cadeira = new Cadeira(4, false, 'azul')
let cadeira2 = new Cadeira(1, false, 'vermelho')
cadeira.girarCadeira()