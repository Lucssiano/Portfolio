/* A way to simplify the selectors to avoid writing them every time i need it */
function $$(selector) {
	return document.querySelectorAll(selector);
}

class Translator {
	constructor() {
		this._elements = $$('[data-i18n]');
		/* Español */
		this._spanishChanges = {
			navLinks: {
				home: 'Inicio',
				aboutMe: 'Sobre mi',
				knowledges: 'Conocimientos',
				projects: 'Proyectos',
				contact: 'Contacto',
			},
			mainContent: {
				helloWord: 'Hola',
				presentation: 'Soy',
			},
			scrollDown: {
				paragraph: 'Desplazate hacia abajo',
			},
			aboutMe: {
				title: 'Sobre <span>Mi</span>',
				descriptionSymbol: 'Descripción',
				descriptionP1:
					'Actualmente me encuentro estudiando tecnologías de front end por mi cuenta y he estado estudiando en la escuela técnica secundaria "Instituto San Judas Tadeo" (en la especialización "Electrónica")',
				descriptionP2:
					'Me considero una persona responsable y preocupada por hacer las cosas de la manera correcta. Me inquieta no saber como funciona algo , por lo que siempre intento buscar información y aprender',
				descriptionP3:
					'Mi objetivo es conseguir experiencia laboral , mejorar gradualmente y por sobre todo incorporar nuevos conocimientos',
				curriculum:
					'<a href="CV - LUCIANO RIENTE.pdf" target="_blank" class="curriculum-vitae-button"><span>Curriculum Vitae (PDF)</span></a>',
				languageSymbol: 'Lenguajes',
				spanishLanguage: 'Español',
				spanishLevel: 'Nativo',
				englishLanguage: 'Inglés',
				improvingParagraph: 'Mejorando mi inglés...',
				skillsSymbol: 'Habilidades Blandas',
				organizationSkill: 'Organización',
				organizationParagraph:
					'Me considero una persona organizada , por eso , usualmente soy bueno organizando mis horarios de trabajo. <br> A modo de ejemplo , si tengo muchas cosas para hacer , intento gestionar mi tiempo con el objetivo de finalizar todo a tiempo , de la mejor manera posible y tener la posibilidad de tener algo de tiempo libre y de descanso.',
				responsibilitySkill: 'Responsabilidad',
				responsibilityParagraph:
					'Entiendo las consecuencias de hacer o dejar de hacer algo a lo que previamente me comprometí. <br> Asumo mis responsabilidades y garantizo el cumplimiento de mis compromisos, lo que generalmente genera confianza y tranquilidad entre las personas.',
				leadershipSkill: 'Liderazgo',
				leadershipParagraph:
					'A lo largo de mi vida, siempre disfruté liderar proyectos en grupo que se me presentaban en mi camino. <br> Siento que ser el lider de un proyecto o un equipo me ayuda a organizar mejor el trabajo en equipo y las tareas a realizar , lo cual posiblemente hará que el proyecto termine de la mejor manera posible.',
				perseveranceSkill: 'Perseverancia',
				perseveranceParagraph:
					'Cuando no puedo resolver algo, intento descansar. <br> Alejarme de lo que estoy haciendo por un rato , me suele ayudar a despejar la mente para luego volver a intentarlo más tarde de una manera más calmada. <br> No me gusta rendirme fácilmente.',
				honestySkill: 'Honestidad',
				honestyParagraph:
					'Me considero una persona sincera , me gusta siempre hablar con la verdad y ser honesto. <br> Además siempre intento ser lo más claro posible, sin causar malentendidos.',
				companionshipSkill: 'Compañerismo',
				companionshipParagraph:
					'Cuando soy bueno en algo, y un compañero necesita ayuda , me gusta poder brindarsela. <br> En mi opinión, el compañerismo hace que un equipo de trabajo funcione mejor.',
				underConstruction: 'Lista en construcción...',
			},
			knowledges: {
				title: 'Cono<span>cimientos</span>',
				learningSpan: 'Aprendiendo',
			},
			projects: {
				title: '<span>Pro</span>yectos',
				hoverImage: 'Pon el cursor sobre la imagen',
				clickToGo: 'Click para ir al sitio',
				sourceCode: 'Código fuente',
				webLink: 'Ir al sitio',
				underRenovationP: 'En renovación',
				RilubankP: 'Diseño de una página de un banco imaginario<br><br>(Hecho para practicar Diseño Web Responsivo)',
				TicTacToe: 'Ta-Te-Ti',
				TicTacToeParagraph: 'El reconocido juego Ta-Te-Ti , aquí juegas contra la computadora',
				DevGuide:
					'Una guia de desarrolladores hecha por un equipo de un grupo del Discord de Apx <br><br>(El link de Apx está en la página)',
				FPOW: '4 Fotos - 1 Palabra',
				FPOWparagraph: 'Un juego donde se muestran 4 fotos y tenés que adivinar la palabra con las letras que dispones',
				HangmanGame: 'Ahorcado',
				HangmanGameP: 'El reconocido juego "Ahorcado", tenés que adivinar la palabra diciendo letras',
				MiniTriviaP: 'Una trivia de 10 preguntas de diferentes temas con 4 opciones de respuesta cada una',
				listUnderConstruction: 'Lista bajo construcción y renovación...',
			},
			contact: {
				title: 'Contacto',
				formTitle: 'Ponte en contacto',
				formName: 'Nombre',
				formAffair: 'Asunto',
				formMessage: 'Mensaje',
				formSubmit: 'Enviar',
				formEnding: 'Contame tu opinión sobre mi portafolio o enviame tu propuesta. <br> Contestaré pronto.',
				botTitle: 'Chatea con el bot de Lucho',
			},
			botChat: {
				title: "Bot de Lucho",
				hi: 'Hola!',
				firstMessage: "Hola! Soy el bot de Lucho &#128540;",
				secondMessage: 'Soy como Lucho, pero mucho más charlatán &#128518;',
				thirdMessage: 'Como te puedo ayudar hoy?',
				firstPossibleAnswer: '&#128513; Simplemente quiero decir hola',
				secondPossibleAnswer: "&#128187; Me gustaría contactarte",
				lastAnswer: 'Te puedo ayudar con algo más? &#128521',
				firstAnswer: 'Simplemente quiero decir hola',
				firstBotAnswerOne: 'Hola!',
				firstBotAnswerTwo: 'Gracias por saludar &#128513',
				firstBotAnswerThree: "Espero que hayas disfrutado navegar el portafolio de Luciano",
				secondAnswer: "Me gustaría contactarte",
				secondBotAnswerOne: 'Hola!',
				secondBotAnswerTwo: "Genial! Luciano va a estar muy feliz por eso &#128378",
				secondBotAnswerThree:
					'Le puedes enviar un mensaje a su <a href="https://www.linkedin.com/in/luciano-riente-7551901b1/" target="_blank">LinkedIn</a></p>',
				secondBotAnswerFour:
					'O quizas le puedes enviar un email en el <a href="#name" class="link-contact-bot">Formulario de contacto</a> de esta página y podrás hablar un poco más con el!',
			},
			appreciation: {
				title: 'Gracias por visitar mi portafolio',
			},
			copyright: {
				title: 'Luciano Riente - Portafolio &copy; 2021 <br>Todos los derechos reservados.',
			},
		};
		/* Inglés */
		this._englishChanges = {
			navLinks: {
				home: 'Home',
				aboutMe: 'About me',
				knowledges: 'Knowledges',
				projects: 'Projects',
				contact: 'Contact',
			},
			mainContent: {
				helloWord: 'Hello',
				presentation: 'I Am',
			},
			scrollDown: {
				paragraph: 'Scroll down',
			},
			aboutMe: {
				title: 'About <span>Me</span>',
				descriptionSymbol: 'Description',
				descriptionP1:
					'Currently, i am studying Front-end technologies on my own and i have been studying in the technical secondary school "Instituto San Judas Tadeo" (in the "Electronics" expertise)',
				descriptionP2:
					'I consider myself a responsible person and concerned about doing the things in the right way. It bothers me not knowing how something works , so i always try to find information and learn.',
				descriptionP3:
					' My goal is to get work experience , gradually improving and above all to incorporate new knowledge.',
				curriculum:
					'<a href="CV English - LUCIANO RIENTE.pdf" target="_blank" class="curriculum-vitae-button"><span>Curriculum Vitae (PDF)</span></a>',
				languageSymbol: 'Languages',
				spanishLanguage: 'Spanish',
				spanishLevel: 'Native',
				englishLanguage: 'English',
				improvingParagraph: 'Improving my English...',
				skillsSymbol: 'Soft Skills',
				organizationSkill: 'Organization',
				organizationParagraph:
					'I consider myself an organized person, so I am usually good at organizing my work schedule. <br>As an example , if I have a lot of things to do, I try to manage my time in order to finish them on time, in the best possible way, and be able to have some free time and rest.',
				responsibilitySkill: 'Responsibility',
				responsibilityParagraph:
					'I understand the consequences of doing or stop doing something which I previously commited to. <br> I assume my responsibilites and guarantee the fulfillment of my commitments , which generally generates trust and peace of mind among people.',
				leadershipSkill: 'Leadership',
				leadershipParagraph:
					'Throughout my life , I have always enjoyed leadering group proyects that came my way. <br> I feel that being the leader of a proyect or a team , helps me to organize better the work team and the tasks to do, which will possibly make that the project ends as smoothly as possible.',
				perseveranceSkill: 'Perseverance',
				perseveranceParagraph:
					'When I can not solve something , I try to rest. <br> Getting away from what I am doing for a while, tends to help me clear my mind so that I can try it again later in a calmer way. <br> I do not like to give up easily.',
				honestySkill: 'Honesty',
				honestyParagraph:
					'I consider myself a sincere person , I like to always talk with the truth and being honest. <br> In addition, I always try to be as clear as possible, without causing misunderstandings.',
				companionshipSkill: 'Companionship',
				companionshipParagraph:
					'When I am good at something and a partner needs help , I like to be able to give it. <br> In my opinion , companionship makes that a work team works better.',
				underConstruction: 'List under construction...',
			},
			knowledges: {
				title: 'Know<span>ledges</span>',
				learningSpan: 'Learning',
			},
			projects: {
				title: '<span>Pro</span>jects',
				hoverImage: 'Hover the image',
				clickToGo: 'Click to go to the site',
				sourceCode: 'Source Code',
				webLink: 'Go to the site',
				underRenovationP: 'Under renovation',
				RilubankP: 'Layout of an imaginary bank<br><br>(Made to practice Responsive Web Design)',
				TicTacToe: 'Tic-Tac-Toe',
				TicTacToeParagraph: 'The well-known Tic Tac Toe game , here you play against the computer',
				DevGuide: 'A dev guide made by a team group of the Discord of Apx <br>(The link of Apx in this page)',
				FPOW: '4 Pictures - 1 Word',
				FPOWparagraph: 'A game where you have 4 pictures and you have to guess the word with the letters you have',
				HangmanGame: 'Hangman Game',
				HangmanGameP: 'The well-known Hangman Game, you have to guess the word by saying letters',
				MiniTriviaP: "A Trivia where you have ten questions of different topics with 4 answer's options each one",
				listUnderConstruction: 'List under construction and renovation...',
			},
			contact: {
				title: 'Contact',
				formTitle: 'Get in touch',
				formName: 'Name',
				formAffair: 'Affair',
				formMessage: 'Message',
				formSubmit: 'Send',
				formEnding: 'Tell me your opinion about my portfolio or send me your proposal. <br>I will answer soon.',
				botTitle: "Chat with Lucho's Bot",
			},
			botChat: {
				title: "Lucho's Bot",
				hi: 'Hi!',
				firstMessage: "Hi! I'm Lucho's bot &#128540;",
				secondMessage: 'I’m just like Lucho, but a far more talkative &#128518;',
				thirdMessage: 'How can I help you today?',
				firstPossibleAnswer: '&#128513; I just want to say hello',
				secondPossibleAnswer: "&#128187; I'd like to contact you",
				lastAnswer: 'Can I help you with anything else? &#128521',
				firstAnswer: 'I just want to say hello',
				firstBotAnswerOne: 'Hello!',
				firstBotAnswerTwo: 'Thanks for saying hi &#128513',
				firstBotAnswerThree: "I hope you've enjoyed browsing Luciano's portfolio",
				secondAnswer: "I'd like to contact you",
				secondBotAnswerOne: 'Hi!',
				secondBotAnswerTwo: "Great! Luciano'll be happy about that &#128378",
				secondBotAnswerThree:
					'You could send him a message to his <a href="https://www.linkedin.com/in/luciano-riente-7551901b1/" target="_blank">LinkedIn</a></p>',
				secondBotAnswerFour:
					'Or may be you could send him an email in the <a href="#name" class="link-contact-bot">Contact form</a> of this page and lets chat with him further!',
			},
			appreciation: {
				title: 'Thank you for visiting my portfolio',
			},
			copyright: {
				title: 'Luciano Riente - Portfolio &copy; 2021 <br>All rights reserved.',
			},
		};
	}

	/* Function which it's called from "main.js" with the language selected. This language is the parameter of this function. */
	changeLanguage(lang) {
		let finalLang;
		switch (lang) {
			case 'es':
				finalLang = this._spanishChanges;
				break;
			case 'en':
				finalLang = this._englishChanges;
				break;
			default:
				console.error("Sorry , we can't translate the page");
		}
		/* Scroll through the elements to be translated, and it is replaced the previous text with the language the user want to translate it.  */
		this._elements.forEach((element) => {
			let text = element.dataset.i18n.split('.').reduce((obj, i) => obj[i], finalLang);
			if (text) {
				element.innerHTML = text;
			}
		});
	}
}

export default Translator;
