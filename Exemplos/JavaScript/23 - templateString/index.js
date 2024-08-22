//O templateString foi criado com o intuito de não precisarmos ficar concatenando variaveis em uma string, facilitando a legibilidade e a escrita

let nome = jorge;
console.log("olá " + jorge + " Tudo bem?")

//Os TemplateStrings são colocados dentro de crases para poder se reconhecer conteudos que não são Strings
//Eles são reconhecidos pelo sinal de $ e chaves, o conteudo dentro irá ser concatenado com a String
console.log(`Oi ${nome}, Tudo bem?`)
console.log(`7 + 7 = ${7+7}`)

function calcular(x, y){
    return x*y;
}

console.log(`A multiplicação 8 * 8 = ${calcular(8,8)}`)