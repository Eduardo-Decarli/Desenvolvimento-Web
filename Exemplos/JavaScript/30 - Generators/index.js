//Uma função generator é uma forma de criar funções que podem ser pausadas e retomadas, permitindo a produção de uma sequência de valores ao longo do tempo
//A função generator é definida pelo * após a palabra reservada function

function* testeGenerator() {
    console.log('teste1')
    console.log('teste 2')
    console.log('teste 3')

    return 'teste 4'
}

let meuGenerator = testeGenerator() //Uma função generator retorna um objeto iterator e não o seu devido retorno

meuGenerator.next() //Usando o método next() a gente pode retomar a função, fazendo ela executar normalmente

//Podemos acrescentar uma palavra chave chamada yield para poder pausar a aplicação em determinada parte

function* testeGenerator() {
    console.log('teste1')
    yield console.log('teste 2') // Isso indica que a função irá rodar apenas até essa linha
    console.log('teste 3')

    return 'teste 4'
}

//ao usar o yield, a gente precisa indicar quando queremos que a execução termine
testeGenerator.next() // Irá rodar até teste2
testeGenerator.next() // Irá rodar o resto da aplicação
//O retorno final de testeGenerator irá ser um objeto, onde se tem duas propriedades, um valor que é o retorno real, e um boolean que indica que a aplicação chegou ao fim
//{value: 'teste4', done: true}