const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');





form.addEventListener('submit',sumarInputValues);
//como hacer que un boton en un form no funcione como submit
function sumarInputValues(event) { 
    console.log({event});
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerHTML = "Resultado: " + sumaInputs;
}






















/*const p = document.querySelector('p');

const parrafito = document.getElementsByClassName('parrafito');

const pid = document.getElementById('pid');

const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});


h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = "456"

const img = document.createElement('img');

img.setAttribute('src', 'https://animecorner.me/wp-content/uploads/2022/07/anya-diary.png');


pid.append(img);*/

