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

// Form
document.addEventListener('DOMContentLoaded', function () {
	var form = document.querySelector('.form');
	var sendButton = document.querySelector('.form-btn');
	var nameInput = form.querySelector('input[name="name"]');
	var messageInput = form.querySelector('textarea[name="text"]');
	var emailInput = form.querySelector('input[name="email"]');
	var emailErrorMessage = null;

	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	function checkEmail() {
		if (emailErrorMessage) {
			emailErrorMessage.remove();
		}

		if (!emailRegex.test(emailInput.value.trim())) {
			emailInput.classList.remove('form-ok');
			emailInput.classList.add('form-bad');
			emailErrorMessage = document.createElement('p');
			emailErrorMessage.textContent = 'Please enter a valid email address.';
			emailErrorMessage.classList.add('email-error');
			emailInput.after(emailErrorMessage);
			return false;
		} else {
			emailInput.classList.remove('form-bad');
			emailInput.classList.add('form-ok');
			return true;
		}
	}

	function checkName() {
		if (nameInput.value.trim() !== '') {
			nameInput.classList.add('form-ok');
			return true;
		} else {
			nameInput.classList.remove('form-ok');
			return false;
		}
	}

	function checkMsg() {
		if (messageInput.value.trim() !== '') {
			messageInput.classList.add('form-ok');
			return true;
		} else {
			messageInput.classList.remove('form-ok');
			return false;
		}
	}

	function checkForm() {
		if (checkName() && checkEmail() && checkMsg()) {
			sendButton.removeAttribute('disabled');
		} else {
			sendButton.setAttribute('disabled', 'disabled');
		}
	}

	form.addEventListener('input', function (event) {
		if (event.target === emailInput) {
			checkEmail();
		}
		if (event.target === nameInput) {
			checkName();
		}
		if (event.target === messageInput) {
			checkMsg();
		}
		checkForm();
	});

	checkForm();
});
