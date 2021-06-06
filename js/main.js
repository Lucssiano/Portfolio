// Forma de simplificar los selectores para no escribirlos cada vez que se necesiten
function $(selector) {
	return document.querySelector(selector);
}
function $$(selector) {
	return document.querySelectorAll(selector);
}
// ################# //

// --- Menú --- //
const header = $('.header');
const menuButton = $('.menu-button');
const lineMenuButton1 = $('.line-1');
const lineMenuButton2 = $('.line-2');
const lineMenuButton3 = $('.line-3');
const ulLinksList = $('.ul-links-list');

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
	if (pageUbication < actualUbication) {
		$('.header').style.boxShadow = '2px 4.5px 4.5px -2px var(--primary-color)'; // #868686
		// $('.header').style.borderBottom = '2px solid var(--little-grey)';
	} else {
		$('.header').style.boxShadow = 'none';
		// $('.header').style.borderBottom = 'none';
	}
	projectsDescription(actualUbication);
	paintedLink(actualUbication);
	// toUpArrowDisplay(actualUbication);
};

const listLinks = $$('.list-link');
const scrollDownSection = $('.scroll-down-container');
// Tuve que poner secciones más especificas porque no me tomaba bien el cambio
const softSkillsSymbol = $('.soft-skills-container .final-symbol');
// const myKnowledgesSection = $('.my-knowledges');
const flexKnowledgeContainer = $('.flex-knowdlege-container');
// const myProjectSection = $('.my-projects');
const projectParagraphImproving = $('.project-p-improving');
// const myContactSection = $('.my-contact');
const appreciationSection = $('.appreciation-section');

function paintedLink(actualUbication) {
	const home = actualUbication <= scrollDownSection.offsetTop;
	const aboutMe = actualUbication >= scrollDownSection.offsetTop && actualUbication < softSkillsSymbol.offsetTop;
	const knowledges = actualUbication >= softSkillsSymbol.offsetTop && actualUbication < flexKnowledgeContainer.offsetTop;
	const projects =
		actualUbication > flexKnowledgeContainer.offsetTop && actualUbication < projectParagraphImproving.offsetTop;
	const contact = actualUbication >= projectParagraphImproving.offsetTop && actualUbication < appreciationSection.offsetTop;

	const arrayLinks = [home, aboutMe, knowledges, projects, contact];
	for (let l = 0; l < arrayLinks.length; l++) {
		arrayLinks[l] ? listLinks[l].classList.add('active') : listLinks[l].classList.remove('active');
	}
}
// ------------- //

// --- Soft skills --- //
const skillsHeader = $$('.skill-header');
const skillsHeaderArrow = $$('.skill-header i');
const skillsDescription = $$('.skill-description');

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
const linkImageContainer = $$('.img-link');
const hoverImageParagraph = $$('.hover-image-paragraph');
const descriptionProject = $$('.description-project');
const gridProject = $$('.grid-project');
const contactSection = $('.my-contact');

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

	const arrayCards = [firstCard, secondCard, thirdCard, fourthCard, fifthCard, sixthCard];
	for (let n = 0; n < arrayCards.length; n++) {
		arrayCards[n]
			? descriptionProject[n].classList.add('view-description-mobile')
			: descriptionProject[n].classList.remove('view-description-mobile');
	}
}
// ------------- //

// --- Bot chat --- //
const botIconContainer = $('.bot-icon-container');
const botChatContainer = $('.bot-chat');
const closeBotChat = $('.exit-bot-container');
const mediaqueryList = window.matchMedia('(min-width: 768px)');
const botMessagesContainer = $('.bot-messages-container');
const possibleAnswersContainer = $('.possible-answers-container');
const possibleAnswers = $$('.possible-answer');
const userAnswer = $$('.user-answer');
const botAnswersContainer = $$('.bot-answers');

// $$$ Hello answer $$$ //
const botHelloSection = $('.hello-bot-section');

const userHelloAnswer = $('.user-hello-answer');
const botHelloAnswersContainer = $('.bot-hello-answers');
const botHelloAnswer = $$('.bot-hello-answer');
// $$$$$$$$$$$$$$$ //

// $$$ Contact answer $$$ //
const botContactSection = $('.contact-bot-section');

const userContactAnswer = $('.user-contact-answer');
const botContactAnswersContainer = $('.bot-contact-answers');
const botContactAnswer = $$('.bot-contact-answer');
// const botContactAnswerLink = $('.bot-contact-answer a.link-contact-bot');
// $$$$$$$$$$$$$$$ //

// $$$ Hire answer $$$ //
const botHireSection = $('.hire-bot-section');

const userHireAnswer = $('.user-hire-answer');
const botHireAnswersContainer = $('.bot-hire-answers');
const botHireAnswer = $$('.bot-hire-answer');
// $$$$$$$$$$$$$$$ //

botIconContainer.addEventListener('click', () => {
	botChatContainer.style.width = '100%';
	botChatContainer.style.height = '100%';
	if (mediaqueryList.matches) {
		botChatContainer.style.width = '25%';
		botChatContainer.style.height = '75%';
	}
});

function closeBot() {
	botChatContainer.style.width = 0;
	botChatContainer.style.height = 0;
	botHelloSection.style.display = 'none';
	botContactSection.style.display = 'none';
	botHireSection.style.display = 'none';
	botHelloAnswer.forEach(element => {
		element.style.display = 'none';
	});
	botContactAnswer.forEach(element => {
		element.style.display = 'none';
	});
	botHireAnswer.forEach(element => {
		element.style.display = 'none';
	});
	for (let a = 0; a < possibleAnswers.length; a++) {
		possibleAnswers[a].style.display = 'block';
	}
}

closeBotChat.addEventListener('click', () => {
	closeBot();
});

// botContactAnswerLink.addEventListener('click', () => {
// 	closeBot();
// });

for (let a = 0; a < possibleAnswers.length; a++) {
	possibleAnswers[a].addEventListener('click', () => {
		possibleAnswers.forEach((ans) => {
			ans.style.display = 'none';
		});
		switch (possibleAnswers[a]) {
			case possibleAnswers[0]:
				botHelloSection.style.display = 'block';
                userHelloAnswer.style.display = 'flex';
				for (let b = 0; b < botHelloAnswer.length; b++) {
					setTimeout(() => {
						botHelloAnswer[b].style.display = 'block';
					}, (b + 1) * 1500);
				}
				setTimeout(() => {
					possibleAnswers[1].style.display = 'block';
					possibleAnswers[2].style.display = 'block';
				}, 7500);
				break;

			case possibleAnswers[1]:
				botContactSection.style.display = 'block';
                userContactAnswer.style.display = 'flex';
				for (let b = 0; b < botContactAnswer.length; b++) {
					setTimeout(() => {
						botContactAnswer[b].style.display = 'block';
					}, (b + 1) * 1500);
				}
				setTimeout(() => {
					possibleAnswers[0].style.display = 'block';
					possibleAnswers[2].style.display = 'block';
				}, 7500);
				break;

			case possibleAnswers[2]:
				botHireSection.style.display = 'block';
                userHireAnswer.style.display = 'flex';
				for (let b = 0; b < botHireAnswer.length; b++) {
					setTimeout(() => {
						botHireAnswer[b].style.display = 'block';
					}, (b + 1) * 1500);
				}
				setTimeout(() => {
					possibleAnswers[0].style.display = 'block';
					possibleAnswers[1].style.display = 'block';
				}, 7500);
				break;
		}
	});
}

// Probar de poner todas las botAnswer en una seccion del html y depende de la respuesta que se ponga se genera el html debajo de todo.

// ------------- //
// --- Arrow to go to the top of the page --- //
// const toUpArrow = $('.arrow-container');
// function toUpArrowDisplay(actualUbication) {
// 	actualUbication >= scrollDownSection.offsetTop ? toUpArrow.classList.add('active') : toUpArrow.classList.remove('active');
// }
// ------------- //

// --- Contact --- //
// const charactersValidation = {
// 	names: {
// 		min: 2,
// 		limit: 30,
// 		val: false,
// 	},
// 	affairs: {
// 		min: 5,
// 		limit: 35,
// 		val: false,
// 	},
// 	emails: {
// 		emailCharacters: /^([da-z_.-]+)@([da-z.-]+).([a-z.]{2,6})$/,
// 		val: false,
// 	},
// 	messages: {
// 		min: 10,
// 		limit: 250,
// 		val: false,
// 	},
// };

// const { names, affairs, emails, messages } = charactersValidation;

// const nameInput = $('#name');
// const affairInput = $('#affair');
// const messageInput = $('#message');
// const submitButton = $('.submit-button');
// const formContainer = $('.contact-form-container');

// nameInput.addEventListener('input', (e) => {
// 	let texto = e.target.value;
// 	// console.log(texto);
// 	names.val = texto.length >= names.min && texto.length <= names.limit;
// });

// affairInput.addEventListener('input', (e) => {
// 	let texto = e.target.value;
// 	// console.log(texto);
// 	affairs.val = texto.length >= affairs.min && texto.length <= affairs.limit;
// });

// messageInput.addEventListener('input', (e) => {
// 	let texto = e.target.value;
// 	// console.log(texto);
// 	messages.val = texto.length >= messages.min && texto.length <= messages.limit;
// });

// submitButton.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	if (messages.val && affairs.val && names.val) {
// 		formContainer.submit();
// 	} else if (messages.val === false) {
// 		alert('The message has to be between 10 and 250 characters');
// 	} else if (affairs.val === false) {
// 		alert('The affair has to be between 5 and 35 characters');
// 	} else if (names.val === false) {
// 		// nameInput.innerHTML += `<br> <div style="color: black">La contraseña debe contener entre ${names.min} y ${names.limit} caracteres </div>`;
// 		alert('The name has to be between 2 and 30 characters');
// 	}
// });

// ------------- //
// ################# //
