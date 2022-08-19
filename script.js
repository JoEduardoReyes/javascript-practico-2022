// h1 { color : blue}

const title = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafo');
const parrafoConId = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(title.outerHTML);

console.log({title, p, parrafito, input});

console.log(title.getAttribute('class'));
title.setAttribute('class', 'title');

title.classList.add('title');
title.classList.remove('Titulo');

input.value = "456"

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/media/logotipo-platzi.png');

parrafoConId.append(img);