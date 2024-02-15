'use strict';

const p = document.querySelector('.faq-p');
const question = document.querySelector('.card');
const icon = document.querySelector('faq-icon');

const openQuestion = function (e) {
	e.preventDefault();
	p.classList.remove('hidden');
};

const closeQuestion = function () {
	p.classList.add('hidden');
};

question.addEventListener('click', openQuestion);
console.log(icon);
icon.addEventListener('click', closeQuestion);
