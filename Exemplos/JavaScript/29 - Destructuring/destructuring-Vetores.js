//O destructuring desestrutura um array ou objeto, ele serve para tirar valores de dentro desses modelos

let frutas = ['mamao', 'melancia', 'banana', 'morango']

//Definimos o destructure atravez de conchetes e logo depois definimos o contexto, no caso é um vetor de frutas
let [] = frutas

//Temos que definir variaveis para serem atribuidas aos valores do vetor de frutas
let [a, b, c] = frutas

console.log(a,b,c) // Isso irá retornar mamão, meçancia e banana

//podemos pular indices também
let [t, e, , n] = frutas // Dessa forma banana não será incluida

//podemos atribuir valores default também
let [posicao1 = 'manga', posicao2, posicao3] = frutas // Desaforma, a posicao1 terá o valor default de manga caso o vetor não tenha a respectiva posicao

//Podemos fazer a desestruturação de um vetor bidimensional também
let coisas = [['mamao', 'melancia', 'banana', 'morango'], ['José', 'Maria']]

//Após definido o array bidimensional, podemos recuperar valores definidos usando um destructure bidimensional
let [[varMamao, ,varBanana],[, varMaria]] = coisas