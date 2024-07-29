var objetos = new Array()

objetos = ['cadeira', 'impressora', 'garfo'];


function adicionar() {
    var valorTexto = document.getElementById("entrada-texto").value
    if (valorTexto == null) {
        alert('Digite um valor valido');
    } else if (objetos.indexOf(valorTexto) != -1) {
        alert('Objeto já foi adicionado');
    } else {
        objetos.push(valorTexto);
        console.log(objetos)
        document.getElementById('entrada-texto').value = ""
    }
}

function ordernar(){
    objetos.sort();
    console.log(objetos);
}