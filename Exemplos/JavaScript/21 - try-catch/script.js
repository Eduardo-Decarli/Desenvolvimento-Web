var video = new Array();

video[1] = new Array();
video[1]['name'] = 'garfield'
video[1]['categoria'] = 'comedia'

function getVideo(){
    
    //aqui utilizamos o try pois no contexto do exemplo, a aplicação é passivel de erros seja http ou lógicos
    //Try é utilizado em um trecho do código que pode dar erro
    try{
        console.log(video[0]['nome '])   
        

    //O catch tem a função de capturar esse erro 
    }
    catch(erro){
        console.log(erro)
        console.log('agora podemos tratar o erro')
    } 
    //O finally será um bloco de código que executará independente do resultado
    //podendo ter ou não dado um erro
    finally {
        console.log('a aplicação sempre passa por aqui')
    }
    //Throw é utilizado para gerar exeções personalizadas, tais como o exemplo a baixo
    throw "houve um erro no código";
}
//é pego um valor do documento html
let x = document.getElementById("demo").value;
  try {
    //aqui o throw serve para enviar um erro personalizado caso o usuario faça algo não esperado
    if(x.trim() == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  //aqui captura o erro, caso o throw não conseguir prever
  catch(err) {
    message.innerHTML = "Input is " + err;
  }