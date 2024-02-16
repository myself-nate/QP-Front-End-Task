'use strict';

const icon = document.querySelector('.faq-icon');
const p = document.querySelectorAll('.faq-p');
const cards = document.querySelectorAll('.card');
console.log(p);

const openQuestion = function (e) {
	e.preventDefault();
	p.classList.toggle('hidden');
};

cards.forEach((card) =>
	card.addEventListener('click', (e) => {
		e.preventDefault();
		p.forEach((pr) => pr.classList.toggle('hidden'));
	})
);

window.onclick = (e) => {
	console.log(e.target);
};
