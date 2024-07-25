/*var data = new Date()

document.write(data.toString()+"<hr>")
//adicionando dias
data.setDate(data.getDate()+1)
document.write(data.toString()+"<hr>")
//adicionando meses
data.setMonth(data.getMonth()+1)
document.write(data.toString()+"<hr>")
//adicionar anos
data.setFullYear(data.getFullYear()+2)
document.write(data.toString())
*/

//15/01/2017
var data1 = new Date(2017, 0, 15)

//23/02/2017
var data2 = new Date(2017, 1, 23)

document.write(data1.toString()+"<hr>")
document.write(data2.toString()+"<hr>")

document.write(data1.getTime() + " + " + data2.getTime() + "<hr>") 
var somaData =  Math.abs(data1.getTime()-data2.getTime())
var dataDiferenca = new Date()
dataDiferenca.setTime(somaData)
document.write(dataDiferenca.getDate() + "/" +dataDiferenca.getMonth())
