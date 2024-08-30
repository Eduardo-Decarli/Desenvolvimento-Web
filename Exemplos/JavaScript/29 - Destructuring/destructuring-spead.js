//agora vamos usar um destructuring sobre um rest/spread
let arr = [100,200,300,400]

//aqui irá armazenar 100 em 'a' e o resto dos valores na variavel resto
let [primeiroIndice, ...resto] = arr

//agora vamos ver em objetos
let obj = {
    a: 10,
    b: 20,
    c: 30
}

let {a, ...restoObj} = obj