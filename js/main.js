// Forma de simplificar los selectores para no escribirlos cada vez que se necesiten
function $(selector) {
	return document.querySelector(selector);
}
function $$(selector) {
	return document.querySelectorAll(selector);
}
// ################# //

// ### VARIABLES ### //

// --- Menú --- //
const header = $('.header');
const menuButton = $('.menu-button');
const lineMenuButton1 = $('.line-1');
const lineMenuButton2 = $('.line-2');
const lineMenuButton3 = $('.line-3');
const ulLinksList = $('.ul-links-list');
// ------------- //

// --- Soft skills --- //
const skillsHeader = $$('.skill-header');
const skillsHeaderArrow = $$('.skill-header i');
const skillsDescription = $$('.skill-description');
// ------------- //

// ################# //

// ### FUNCIONES ### //

// --- Menú --- //
function menuDisplay() {
	ulLinksList.classList.toggle('active');
	lineMenuButton1.classList.toggle('active');
	lineMenuButton2.classList.toggle('active');
	lineMenuButton3.classList.toggle('active');
}

menuButton.addEventListener('click', () => {
	menuDisplay();
});

// Para que si se presiona por fuera de la lista de navegación , se salga la lista //
window.addEventListener('click', (e) => {
	if (
		ulLinksList.classList.contains('active') &&
		e.target !== header &&
		e.target !== menuButton &&
		e.target !== lineMenuButton1 &&
		e.target !== lineMenuButton2 &&
		e.target !== lineMenuButton3
	) {
		menuDisplay();
	}
});

// Para que el header cambie cuando se scrollea //
// Ubicación principal de la página (cuando está arriba de todo)
let principalUbication = window.pageYOffset;
window.onscroll = function () {
	let actualUbication = window.pageYOffset;
	if (principalUbication < actualUbication) {
		$('.header').style.boxShadow = '2px 4.5px 4.5px -2px var(--primary-color)'; // #868686
		// $('.header').style.borderBottom = '2px solid var(--little-grey)';
	} else {
		$('.header').style.boxShadow = 'none';
		// $('.header').style.borderBottom = 'none';
	}
};
// ------------- //

// --- Soft skills --- //
for (let i = 0; i < skillsHeader.length; i++) {
	skillsHeader[i].addEventListener('click', () => {
		skillsDescription[i].classList.toggle('active');
		skillsHeaderArrow[i].classList.toggle('bxs-chevron-down');
		skillsHeaderArrow[i].classList.toggle('bxs-chevron-up');
		skillsHeaderArrow[i].classList.toggle('active');
	});
}
// ------------- //

// ################# //
