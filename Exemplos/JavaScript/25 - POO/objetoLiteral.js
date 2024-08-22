//Em javascript podemos definir um objeto de diferentes maneiras
class Produto{
    constructor(descricao, preco){
        this.descricao = descricao
        this.preco = preco
    }

    varDescricao(){
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

let produto = new Produto('notebook', 2200)
produto.varDescricao()

//podemos fazer da forma a cima pela definição de classe ou podemos fazer um objeto literal que é uma forma encurtada e simples de criação
 
let produtoLiteral = {
    descricao: 'Geladeira',
    preco: 50.00,
    varDescricao: function(){
        console.log(`${this.descricao} por aepnas ${this.preco}`)
    }
}

//Formas de implementar o objeto literal na utilização de formularios
//----------------------------------------------------------
// formulario -> servidor
// recupera os dados e monta um objeto literal usando alguma função de captura, como getElementById
//      obj Literal -> JSON -> HTTP -> server -> armazena

let nome = 'jorge'
let idade = 20
let sexo = 'masculino'
let profissao = 'programador'

let objeto = {
    nome: nome,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: () => {
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`)
    }
}

console.log(objeto)
objeto.exibirResumo;

//Existe melhorias que podemos implementar para tornar o código mais enchuto

let objeto2 = {
    nome, // nome = nome variavel / valor = valor da variavel
    sexo,
    profissao,
    exibirResumo(){
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`)
    }
}