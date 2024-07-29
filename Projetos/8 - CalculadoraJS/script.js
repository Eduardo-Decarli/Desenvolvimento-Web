function calcular(tipo, valor){
    if(tipo === 'acao'){
        if( valor === 'c'){
            //limpa o visor do resultado
            document.getElementById('resultado').value = 0
        }
        //odiciona o operador ao calculo e mostra no visor
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/'|| valor === '.'){
            document.getElementById('resultado').value += valor
        }
        //usa a função eval() para receber um calculo em string e retornar como resposta em numeral
        if(valor === '='){
            var valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
        }   
    }else if(tipo === 'valor'){
        document.getElementById('resultado').value += valor
    }
}

