"use stict";
const firstId = document.querySelector('#first');
firstId.style.backgroundColor = 'red';

const secondId = document.querySelector('#second');
secondId.style.backgroundColor = 'blue';

const elements = document.querySelectorAll(".yellow");
for (let i = 0; i < elements.length; i++ ) {
 if (i === 0 || i === elements.length - 1) elements[i].style.backgroundColor = 'yellow';
}