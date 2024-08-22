//Um parametro default é utilizado para dar um valor a uma variavel de uma função caso o usuario não especifique seu valor na chamada da função.
function contarHistoria(personagem = 'fubá', atividade = "passear", nome_dono = "Joao"){
    document.write(`Era uma vez um cachorro chamado ${personagem}, ele gostava de ${atividade}, seu dono era ${nome_dono}`);
}

contarHistoria();
//Esses parametros irao substituir os parametros declarados na criação da função 
contarHistoria("repolho", "dormir", "pedro");
//Declarar o parametro como undefined, irá manter a declaração default original da função
contarHistoria(undefined, "dormir", "Pedro")