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

// --- Project Cards --- //
const linkImageContainer = $$('.img-link');
const hoverImageParagraph = $$('.hover-image-paragraph');
const descriptionProject = $$('.description-project');
const gridProject = $$('.grid-project');
const contactSection = $('.my-contact');
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

// Para que el header cambie cuando se scrollea y para que aparezca la descripción de los projectos en mobile //
// Ubicación de la página al principio de todo
let pageUbication = window.pageYOffset;
window.onscroll = function () {
	let actualUbication = window.pageYOffset;
	// console.log(actualUbication);
	if (pageUbication < actualUbication) {
		$('.header').style.boxShadow = '2px 4.5px 4.5px -2px var(--primary-color)'; // #868686
		// $('.header').style.borderBottom = '2px solid var(--little-grey)';
	} else {
		$('.header').style.boxShadow = 'none';
		// $('.header').style.borderBottom = 'none';
	}
	projectsDescription(actualUbication);
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

// --- Project Cards --- //
for (let c = 0; c < linkImageContainer.length; c++) {
	linkImageContainer[c].addEventListener('mouseover', () => {
		hoverImageParagraph[c].style.height = 0;
		hoverImageParagraph[c].style.paddingBottom = 0;
		linkImageContainer[c].addEventListener('mouseout', () => {
			hoverImageParagraph[c].style.height = '3.8rem';
			hoverImageParagraph[c].style.paddingBottom = '2rem';
		});
	});
}

function projectsDescription(actualUbication) {
	// Esto no me conviene pq la página va cambiando de altura , aunque es mas linda la transición
	// const firstCard = actualUbication >= 5474 && actualUbication <= 5886;
	// const secondCard = actualUbication >= 5956 && actualUbication <= 6305;
	// const thirdCard = actualUbication >= 6339 && actualUbication <= 6689;
	// const fourthCard = actualUbication >= 6753 && actualUbication <= 7101;
	// const fifthCard = actualUbication >= 7137 && actualUbication <= 7494;
	// const sixthCard = actualUbication >= 7528 && actualUbication <= 7891;
	const firstCard = gridProject[0].offsetTop >= actualUbication && gridProject[0].offsetTop <= gridProject[1].offsetTop;
	const secondCard = gridProject[1].offsetTop >= actualUbication && gridProject[1].offsetTop <= gridProject[2].offsetTop;
	const thirdCard = gridProject[2].offsetTop >= actualUbication && gridProject[2].offsetTop <= gridProject[3].offsetTop;
	const fourthCard = gridProject[3].offsetTop >= actualUbication && gridProject[3].offsetTop <= gridProject[4].offsetTop;
	const fifthCard = gridProject[4].offsetTop >= actualUbication && gridProject[4].offsetTop <= gridProject[5].offsetTop;
	const sixthCard = gridProject[5].offsetTop >= actualUbication && gridProject[5].offsetTop <= contactSection.offsetTop;

	const array = [firstCard, secondCard, thirdCard, fourthCard, fifthCard, sixthCard];
	for (let n = 0; n < array.length; n++) {
		array[n]
			? descriptionProject[n].classList.add('view-description-mobile')
			: descriptionProject[n].classList.remove('view-description-mobile');
	}
}
// ------------- //

// ################# //
