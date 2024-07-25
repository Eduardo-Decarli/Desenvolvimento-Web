var nome = prompt("Digite o nome")
var altura = parseFloat(prompt("Digite a altura em CM"))
var peso = parseFloat(prompt("Digite o peso em KG"))

altura /= 100

var resultado_M = peso/Math.pow(altura,2)
var resultado_C = null


if(resultado_M < 16){
    resultado_C = "Baixo peso muito grave"
}else if(resultado_M >= 16 && resultado_M <= 16.99){
    resultado_C ="Baixo peso grave"
}else if(resultado_M >= 17 && resultado_M <= 18.49){
    resultado_C ="Baixo Peso"
}else if(resultado_M >= 18.50 && resultado_M <= 24.99){
    resultado_C ="Peso normal"
}else if(resultado_M >= 25 && resultado_M <= 29.99){
    resultado_C ="Sobrepeso"
}else if(resultado_M >= 30 && resultado_M <= 34.99){
    resultado_C ="Obesidade grau 1"
}else if(resultado_M >= 35 && resultado_M <= 39.99){
    resultado_C ="Obesidade grau 2"
}else{
    resultado_C ="Obesidade grau 3"
}

document.write(nome + " possui índice de massa corporal igual a " + resultado_M + ", sendo classificado como: " + resultado_C + ".")