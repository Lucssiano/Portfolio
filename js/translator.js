/* A way to simplify the selectors to avoid writing them every time i need it */
function $$(selector) {
	return document.querySelectorAll(selector);
}

class Translator {
	constructor() {
		this._elements = $$('[data-i18n]');
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
		};
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
