var pessoas = ['roberto', 'maria', 'douglas', 'carlos']

for(var i = 0; i <= pessoas.length - 1; i++){
    console.log(pessoas[i])
}

var y = 1

while(y <= 10){

var z = 1
    while(z <= 10){
        document.write(y + " x " + z + " = " + (y*z) + "<br />")
        z++
    }
    y++
}