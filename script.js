'use strict';

//FAQ
const icon = document.querySelectorAll('.faq-icon');
const p = document.querySelectorAll('.faq-p');
const cards = document.querySelectorAll('.card');

cards.forEach((card, i) =>
	card.addEventListener('click', (e) => {
		e.preventDefault();
		if (p[i].classList.contains('hidden')) {
			p[i].classList.remove('hidden');
			icon[i].setAttribute('name', 'close-outline');
		} else {
			p[i].classList.add('hidden');
			icon[i].setAttribute('name', 'add-outline');
		}
	})
);

// Testimonials
const sliderContainer = document.querySelector('.slider');
const testimonials = document.querySelectorAll('.testimonials-container');
const leftBtn = document.querySelector('.testimonial-btn--left');
const rightBtn = document.querySelector('.testimonial-btn--right');
const el = document.querySelectorAll('.faq-question');

let currentSlide = 0;

const checkDisabled = function () {
	if (currentSlide === 0) {
		leftBtn.classList.add('test-disabled');
	} else if (currentSlide === 3) {
		rightBtn.classList.add('test-disabled');
	} else {
		leftBtn.classList.remove('test-disabled');
		rightBtn.classList.remove('test-disabled');
	}
};

const showSlide = (i) => {
	testimonials.forEach((slide) => {
		slide.style.display = 'none';
	});

	testimonials[i].style.display = 'block';
};

showSlide(currentSlide);
checkDisabled();

leftBtn.addEventListener('click', function (e) {
	e.preventDefault();
	currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
	showSlide(currentSlide);
	checkDisabled();
});

rightBtn.addEventListener('click', function (e) {
	e.preventDefault();
	currentSlide = (currentSlide + 1) % testimonials.length;
	showSlide(currentSlide);
	checkDisabled();
});

// Mobile nav
const mobIcon = document.querySelector('.btn-mobile-nav');
const overlay = document.querySelector('.overlay');

mobIcon.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelector('.nav-links').classList.toggle('hidden');
	document.querySelector('.select').classList.toggle('hidden');
	document.querySelector('.nav-cta').classList.toggle('hidden');
	overlay.classList.toggle('hidden');

	if (!overlay.classList.contains('hidden')) {
		document
			.querySelector('.icon-mobile-nav')
			.setAttribute('name', 'close-outline');
	} else {
		document
			.querySelector('.icon-mobile-nav')
			.setAttribute('name', 'menu-outline');
	}
});
