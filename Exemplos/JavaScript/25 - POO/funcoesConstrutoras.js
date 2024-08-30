
//Podemos declarar funções que constroem objetos da seguinte forma

let Carro = function(){
    this.cor = 'amarelo'
    this.modelo = 'chevete'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180
    //Métodos de funções construtoras
    this.acelerar = function(){
        let velocidade = this.getVelocidadeAtual() + 50
        if(velocidade > this.velocidadeMaxima){
            velocidade = this.velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function(velocidadeAtual){
        this.velocidadeAtual = velocidadeAtual
    }
}

let Carro2 = function(){

    var velocidadeMaxima = 180
    var quilometrosRodados = 0

    this.cor = 'amarelo'
    this.modelo = 'chevete'
    this.velocidadeAtual = 0
    //Métodos de funções construtoras
    this.acelerar = function(){
        let velocidade = this.getVelocidadeAtual() + 50
        if(velocidade > velocidadeMaxima){
            velocidade = velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)

        quilometrosRodados += 0.05
        console.log(quilometrosRodados)
    }

    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function(velocidadeAtual){
        this.velocidadeAtual = velocidadeAtual
    }
}