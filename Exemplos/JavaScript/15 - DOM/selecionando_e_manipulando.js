




//Alterar Conteudo

//innerText serve para alterar o texto interno de um documento
const conteudo = document.getElementById('titulo')
titulo.innerText = "novo titulo"



//Alterar Atributos

//setAttribute serve para definir um novo valor para um atributo HTML
const link = document.querySelector('a');
link.setAttribute('href', "https//ww.novo-link.com")

//getAttribute obtem o valor de um atributo
const href = link.getAttribute('href')

//Alterar Estilos

//style é um atributo para nos referirmos ao CSS
const paragrafo = document.getElementById('p1')
paragrafo.style.color = "blue"
paragrafo.style.fontSize = "24px"

//Adicionar e Remover Classes CSS



//