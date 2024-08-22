//-------------------------------
//Selecionar um elemento do DOM

//Seleciona pelo id
const titulo = document.getElementById('titulo');

//Seleciona todos os elementos com uma determinada classe
const itens = document.getElementsByClassName('item')

//Seleciona todos os elementos com a respectiva tag HTML
const divs = document.getElementsByTagName('div')

//Seleciona o primeiro elemento que corresponde a um seletor CSS
const primerioItem = document.querySelector('.item')

//Seleciona todos os elementos que correspondem a um seletor CSS
const todosOsItens = document.querySelectorAll('item')

//---------------------------
//Manipulando Elementos do DOM

//Alterar Conteudo

//innerText serve para alterar o texto interno de um documento
const conteudo = document.getElementById('titulo')
titulo.innerText = "novo titulo"

//innerHTML serve para alterar o conteudo HTML interno de um documento
const container = document.getElementById('container')
container.innerHTML = '<p>Conteudo HTML</p>';

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

//classList.add adiciona uma classe a variavel
titulo.classList.add('novo-estilo-CSS')

//classList.remove remove uma classe CSS
titulo.classList.remove('novo-estilo.CSS')

//