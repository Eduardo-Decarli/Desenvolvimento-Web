
//Podemos atribuir um destructuring para uma função

let arr = [100, 200, 300, 400]

function teste(a, b, c){
    console.log(a,b,c)
}

teste(arr[0], arr[1])

//após definir dessa forma, podemos usar o destructuring
//Sobreescrevemos a função teste(), agora recebendo um array como parametro e usando o destructure dentro desse array
function teste([a,b,,d,e=10000]){
    console.log(a,b,c,d,e)
}

teste(arr)

//Agora vamos ver função para objetos
let obj = {
    a:10,
    b:20,
    c:30,
    d:40
}

function teste(a, b){
    console.log(a,b)
}

teste(obs.a, obj.b)

//apos definido, vamos acessar o objeto pelo destructuring

function teste({a, b, c, d}){
    cocnsole.log() 
}

teste(obj);

//Quando usamos destructuring em vetores e arrays, ele irá se relacionar sobre a posicao
//Por exemplo, ele irá iterar sobre posicao do array
let [posicao1, posicao2] = teste 

//Mas quando é para objetos, ele irá iterar sobre as propriedades dos objetos e não sobre posicao
