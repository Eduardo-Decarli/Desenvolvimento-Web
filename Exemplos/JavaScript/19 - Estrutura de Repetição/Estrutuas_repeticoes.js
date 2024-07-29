//While
var x = 1
while(x <= 10){
    document.write(x + '<br />')
    if(x == 5){
        //break pode ser utilizado para quebrar a 
        //estrutura de repetição, finalizando o while
        break;
    }
    x++

}

//Do While
var x = 11;
do {
    document.write(x + '<br />')
}while(x<=10)

//For
for(var i = 10; i >= 0; i--){

}

//for-in
//o for-in permite uma variavel receber a informação de um array
//e dessa forma o for percorre o array, com a variavel recebendo cada indice

//array
var listaConvidados = ['jorge', 'jamilton', 'josé']

//sintáxe do for-in
for(var x in listaConvidados){
    console.log(x)
}

//for-each
var listaFuncionarios = ['vivane', 'rosangela', 'miguel']

listaFuncionarios.forEach(function(valor, indice, array){
    console.log('valor' = valor)
})