var a = 10
var b = 20
var c = null // variavel auxiliar

document.write("A: " + a + "<br>")
document.write("B: " + b + "<br>")
document.write("C: " + c + "<br>")
document.write("<hr>")

c = b
b = a
a = c

document.write("A: " + a + "<br>")
document.write("B: " + b + "<br>")

