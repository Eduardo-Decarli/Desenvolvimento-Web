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

//Alterar Elementos HTML
titulo = document.getElementById('titulo');
titulo.innerHTML = 'Trocar o Titulo'

//Altera o Atributo
titulo = document.getElementById('titulo');
titulo.nomeDoAtributo = novoAtributo

//Alterar uma propriedade de estilo
titulo = document.getElementById('titulo');
titulo.style.color = '#FF0000'

//classList.add adiciona uma classe a variavel
titulo.classList.add('novo-estilo-CSS')

//classList.remove remove uma classe CSS
titulo.classList.remove('novo-estilo.CSS')

//innerHTML serve para alterar o conteudo HTML interno de um documento
const container = document.getElementById('container')
container.innerHTML = '<p>Conteudo HTML</p>';