//Em JavaScript, os operadores rest (...) e spread (...) são usados 
//para manipular coleções de elementos, como arrays e objetos. 
//Ambos utilizam a mesma sintaxe (...), mas têm finalidades diferentes dependendo do contexto 

//Contexto Spread

let tituloString = "como utilizar o operador rest/spread"

//String
console.log(tituloString) // Esse irá retornar o texto normal
console.log(...tituloString) // o Rest separa as informações de uma variavel, então ele irá retornar todos os caracteres separadamente

//Arrays
let listaCursos1 = ['NodeJS e MongoDB', 'ES6, TypeScript e Angular 4']
let listaCursos2 = ['Multiplataforma Androis/IOS', 'Introdução ao GNU/Linux']
let listaCursosCompleto = ['Curso Web Desenvolvimento', ...listaCursos1, ...listaCursos2] // Isso irá retornar os indices dos cursos marcados com o operador spread

//Objetos
let Pessoa = {
    nome: 'Eduardo',
    idade: 20
}

let usuario = {
    idUser: '123',
    ...Pessoa // Isso irá retornar o nome e idade em Pessoa
}

//Rest
//Enquanto o operador spread separa os valores, o rest junta eles, comumente utilizado em funções 

function soma(...param){
    let resultado = 0

    param.forEach(v => resultado += v)

    return resultado
}

soma(3, 8, 5, 1)

function multiplicacao(m, ...p){

    let resultado = 0;
    p.forEach(v => resultado += v)
    return resultado
}

parametros(5, 2, 5, 7, 2, 43)