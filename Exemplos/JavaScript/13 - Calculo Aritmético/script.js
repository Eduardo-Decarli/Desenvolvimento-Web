var numero1 = prompt("Digite um Numero")
var calculo = prompt("Digite soma ou subtração")
var numero2 = prompt("Digite outro numero")

numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)

if(calculo === "soma"){
    document.write(soma(numero1, numero2))
}else{
    document.write(sub(numero1, numero2))
}



function soma(x, y){
    return x + y
}

function sub(x, y){
    return x - y
}