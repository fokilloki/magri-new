const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 300;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener('click', function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
			console.log('asdsa')

		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener('click', function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}
function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}
function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('_lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('_lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

let nameTypeBtn = document.querySelectorAll('.content-variables__btn');
let nameType;
nameTypeBtn.forEach(function (item, index) {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		nameType = item.previousElementSibling.innerHTML;
		let popupTitle = document.querySelector('#variables-title');
		popupTitle.querySelector('span').innerHTML = nameType;
	});
});







new Swiper('.page-slider__container', {
	// Стрелки
	navigation: {
		nextEl: '.page-slider__swiper-button-next',
		prevEl: '.page-slider__swiper-button-prev',
	},
	// Навигация
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.page-slider__swiper-pagination',

		// Буллеты
		clickable: true,

		// Динамические буллеты
		dynamicBullets: true,

	},

	// Включение/отключение свайпа на пк
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: true,

	// Управление клавиатурой
	keyboard: {
		// Включить/выключить
		enabled: true,
		// Включить/выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить/выключить
		// управление клавишами
		// pageUP, pageDown
		pageUpDown: true,
	},

	// Количество слайдов для показа
	slidesPerView: 1,

	// Отступ между слайдами
	spaceBetween: 30,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Количество дулирующих слайдов
	loopedSlides: 1,

	// Автопрокрутка
	autoplay: {
		// Пауза между прокруткой
		delay: 1000, //ms
		// Закончить на последнем слайде
		stopOnLastSlide: false,
		// Включить\отключить после ручного переключения
		disableOnInteraction: false,
	},

	// Скорость смены слайдов
	speed: 800,

	// Эффекты переключения слайдов:
	// / Листание
	effect: 'slide',

	// Брейк поинты (адаптив)
	// Ширина экрана
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1500: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},


});


new Swiper('.constructor-form-center-slider', {
	// Стрелки
	navigation: {
		nextEl: '.constructor-form-center-slider__swiper-button-next',
		prevEl: '.constructor-form-center-slider__swiper-button-prev',
	},
	// Навигация
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.constructor-form-center-slider__pagination',

		// Буллеты
		clickable: true,

		// Динамические буллеты
		dynamicBullets: true,

	},

	// Включение/отключение свайпа на пк
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,


	// Управление клавиатурой
	keyboard: {
		// Включить/выключить
		enabled: true,
		// Включить/выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить/выключить
		// управление клавишами
		// pageUP, pageDown
		pageUpDown: true,
	},

	// Количество слайдов для показа
	slidesPerView: 3,

	// Отступ между слайдами
	spaceBetween: 30,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	centeredSlides: true,

	// Количество дулирующих слайдов
	loopedSlides: 1,


	// Скорость смены слайдов
	speed: 800,

	// Эффекты переключения слайдов:
	// / Листание
	effect: 'slide',

	// Брейк поинты (адаптив)
	// Ширина экрана
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1500: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
});









// Анимация открытия шкафа

let btnNexts = document.querySelectorAll('.btn-next');
let btnBacks = document.querySelectorAll('.btn-back');
let shkafContents = document.querySelectorAll('.page-shkaf__content');
let pageShkafImg = document.querySelectorAll('.page-shkaf__img');
let backShkafImg = document.querySelectorAll('.back-shkaf__img');


pageShkafImg.forEach(function (item, index) {
	item.addEventListener('click', function (e) {
		shkafContents[index].classList.add('_active')
	});
});

backShkafImg.forEach(function (item, index) {
	item.addEventListener('click', function (e) {
		item.parentNode.parentNode.parentNode.classList.remove('_active')
	});
});

btnNexts.forEach(function (item, index) {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		shkafContents[index].classList.add('_active')
	});
});

btnBacks.forEach(function (item, index) {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		shkafContents[index].classList.remove('_active')
	});
});

// Получение приблизительной цены

var inp = document.getElementsByName('group');

inp.forEach(function (item, index) {
	item.addEventListener('click', function (e) {
		let constructorForm = document.getElementById('constructorform');
		constructorForm.classList.add('_active')
		let inputHeight;
		let volumeHeight;
		let inputWidth;
		let volumeWidth;
		let inputDepth;
		let volumeDepth;
		let inputBoxes;
		let volumeBoxes;
		let inputShkaf;
		let resultsConstructor;
		let baseHeight = 200;;
		let baseWidth;
		let baseDepth = 40;
		let base;
		let step;
		if (item.id == 'one') {
			inputHeight = constructorForm.elements.oneuserheigt;
			volumeHeight = document.querySelector('#onevolumeuserheigt');
			inputWidth = constructorForm.elements.oneuserwidth;
			volumeWidth = document.querySelector('#onevolumeuserwidth');
			inputDepth = constructorForm.elements.oneuserdepth;
			volumeDepth = document.querySelector('#onevolumeuserdepth');
			inputBoxes = constructorForm.elements.oneuserboxes;
			volumeBoxes = document.querySelector('#onevolumeuserboxes');
			inputShkaf = constructorForm.elements.onesliderinput;
			resultsConstructor = document.querySelector('#oneconstructorformlabel');
			baseWidth = 100;
			base = parseInt(resultsConstructor.querySelector('span').innerHTML.replace(/\s/g, ''));
			step = parseInt(resultsConstructor.dataset.step);
		}
		if (item.id == 'two') {
			inputHeight = constructorForm.elements.twouserheigt;
			volumeHeight = document.querySelector('#twovolumeuserheigt');
			inputWidth = constructorForm.elements.twouserwidth;
			volumeWidth = document.querySelector('#twovolumeuserwidth');
			inputDepth = constructorForm.elements.twouserdepth;
			volumeDepth = document.querySelector('#twovolumeuserdepth');
			inputBoxes = constructorForm.elements.twouserboxes;
			volumeBoxes = document.querySelector('#twovolumeuserboxes');
			inputShkaf = constructorForm.elements.twosliderinput;
			resultsConstructor = document.querySelector('#twoconstructorformlabel');
			baseWidth = 160;
			base = parseInt(resultsConstructor.querySelector('span').innerHTML.replace(/\s/g, ''));
			step = parseInt(resultsConstructor.dataset.step);
		}
		if (item.id == 'three') {
			inputHeight = constructorForm.elements.threeuserheigt;
			volumeHeight = document.querySelector('#threevolumeuserheigt');
			inputWidth = constructorForm.elements.threeuserwidth;
			volumeWidth = document.querySelector('#threevolumeuserwidth');
			inputDepth = constructorForm.elements.threeuserdepth;
			volumeDepth = document.querySelector('#threevolumeuserdepth');
			inputBoxes = constructorForm.elements.threeuserboxes;
			volumeBoxes = document.querySelector('#threevolumeuserboxes');
			inputShkaf = constructorForm.elements.threesliderinput;
			resultsConstructor = document.querySelector('#threeconstructorformlabel');
			baseWidth = 260;
			base = parseInt(resultsConstructor.querySelector('span').innerHTML.replace(/\s/g, ''));
			step = parseInt(resultsConstructor.dataset.step);
		}

		let valueHeight = inputHeight.value;
		let valueWidth = inputWidth.value;
		let valueDepth = inputDepth.value;
		let valueBoxes = inputBoxes.value;
		let valueShkaf = inputShkaf.value;
		inputShkaf.forEach(function (item, index) {
			item.addEventListener('click', function (e) {
				valueShkaf = inputShkaf[index].value;
				mathConstructor()
			});
		});

		inputHeight.oninput = function () {
			valueHeight = inputHeight.value;
			volumeHeight.value = valueHeight;
			mathConstructor()
		};
		inputWidth.oninput = function () {
			valueWidth = inputWidth.value;
			volumeWidth.value = valueWidth;
			mathConstructor()
		};
		inputDepth.oninput = function () {
			valueDepth = inputDepth.value
			volumeDepth.value = valueDepth;
			mathConstructor()
		};
		inputBoxes.oninput = function () {
			valueBoxes = inputBoxes.value
			volumeBoxes.value = valueBoxes;
			mathConstructor()
		};

		function mathConstructor() {
			let sumConstructor = parseInt((base + (parseInt((valueHeight - baseHeight) / 10 * step) + parseInt((valueWidth - baseWidth) / 10 * step) + parseInt((valueDepth - baseDepth) / 10 * step) + parseInt(valueBoxes * 2500))) * parseFloat(valueShkaf * 1));
			resultsConstructor.querySelector('span').innerHTML = sumConstructor.toLocaleString();
		}
	});
});

// отправка заказа

let constructorFormButtons = document.querySelectorAll('.constructor-form-bottom__button');

constructorFormButtons.forEach(function (item, index) {
	item.addEventListener('click', function (e) {
		e.preventDefault()
		let constructorForm = document.getElementById('constructorform');
		let formConstructorType = document.querySelector('.form-constructor__type');
		let formConstructorWidth = document.querySelector('.form-constructor__width');
		let formConstructorHeight = document.querySelector('.form-constructor__height');
		let formConstructorDepth = document.querySelector('.form-constructor__depth');
		let formConstructorBoxes = document.querySelector('.form-constructor__boxes');
		let formConstructorDoors = document.querySelector('.form-constructor__doors');

		let inputWidth;
		let inputHeight;
		let inputDepth;
		let inputBoxes;
		let inputShkaf;
		let nameShkaf;
		if (index === 0) {
			inputWidth = constructorForm.elements.oneuserwidth.value;
			inputHeight = constructorForm.elements.oneuserheigt.value;
			inputDepth = constructorForm.elements.oneuserdepth.value;
			inputBoxes = constructorForm.elements.oneuserboxes.value;
			inputShkaf = constructorForm.elements.onesliderinput;
			inputShkaf.forEach(function (item, index) {
				if (inputShkaf[index].checked == true) {
					nameShkaf = item.previousElementSibling.innerHTML;
				}
			})

			formConstructorType.value = 'двуххдверный шкаф купе';
			formConstructorWidth.value = inputWidth;
			formConstructorHeight.value = inputHeight;
			formConstructorDepth.value = inputDepth;
			formConstructorBoxes.value = inputBoxes;
			formConstructorDoors.value = nameShkaf;

		};
		if (index === 1) {
			inputWidth = constructorForm.elements.twouserwidth.value;
			inputHeight = constructorForm.elements.twouserheigt.value;
			inputDepth = constructorForm.elements.twouserdepth.value;
			inputBoxes = constructorForm.elements.twouserboxes.value;
			inputShkaf = constructorForm.elements.twosliderinput;
			inputShkaf.forEach(function (item, index) {
				if (inputShkaf[index].checked == true) {
					nameShkaf = item.previousElementSibling.innerHTML;
				}
			})
			formConstructorType.value = 'трехдверный шкаф купе';
			formConstructorWidth.value = inputWidth;
			formConstructorHeight.value = inputHeight;
			formConstructorDepth.value = inputDepth;
			formConstructorBoxes.value = inputBoxes;
			formConstructorDoors.value = nameShkaf;
		};
		if (index === 2) {
			inputWidth = constructorForm.elements.threeuserwidth.value;
			inputHeight = constructorForm.elements.threeuserheigt.value;
			inputDepth = constructorForm.elements.threeuserdepth.value;
			inputBoxes = constructorForm.elements.threeuserboxes.value;
			inputShkaf = constructorForm.elements.threesliderinput;
			inputShkaf.forEach(function (item, index) {
				if (inputShkaf[index].checked == true) {
					nameShkaf = item.previousElementSibling.innerHTML;
				}
			})

			formConstructorType.value = 'четырехдверный шкаф купе';
			formConstructorWidth.value = inputWidth;
			formConstructorHeight.value = inputHeight;
			formConstructorDepth.value = inputDepth;
			formConstructorBoxes.value = inputBoxes;
			formConstructorDoors.value = nameShkaf;

		};
	})
});

let shkafFormButtons = document.querySelectorAll('.form-shkaf__button_sub');


shkafFormButtons.forEach(function (item, index) {
	item.addEventListener('click', function (e) {
		e.preventDefault()
		let shkafForm = document.querySelectorAll('#formShkaf');

		let shkafFormWidth;
		let shkafFormCost;
		let popupForm = document.getElementById('form-cupboard');
		let shkafFormType;
		let shkafFormCheck;


		let formCupboardType = document.querySelector('.form-cupboard__type');
		let formCupboardWidth = document.querySelector('.form-cupboard__width');
		let formCupboardCost = document.querySelector('.form-cupboard__cost');




		let form;
		let inputWidth;
		let inputCost;

		if (index === 0) {
			form = shkafForm[0];
			shkafFormCheck = form.elements.tableshkafbtn
			shkafFormWidth = form.querySelectorAll('.bottom-table__center');
			shkafFormCost = form.querySelectorAll('.bottom-table__right');

			shkafFormCheck.forEach(function (item, index) {
				if (shkafFormCheck[index].checked == true) {
					inputWidth = shkafFormWidth[index].innerHTML
					inputCost = shkafFormCost[index].innerHTML
				}
			})

			shkafFormType = 'двуххдверный шкаф купе';

			formCupboardType.value = shkafFormType;
			formCupboardWidth.value = inputWidth;
			formCupboardCost.value = inputCost;

		};
		if (index === 1) {
			form = shkafForm[1];
			shkafFormWidth = form.querySelectorAll('.bottom-table__center');
			shkafFormCost = form.querySelectorAll('.bottom-table__right');
			shkafFormCheck = form.elements.tableshkafbtn

			shkafFormType = 'трехдверный шкаф купе';

			shkafFormCheck.forEach(function (item, index) {
				if (shkafFormCheck[index].checked == true) {
					inputWidth = shkafFormWidth[index].innerHTML
					inputCost = shkafFormCost[index].innerHTML
				}
			})

			formCupboardType.value = shkafFormType;
			formCupboardWidth.value = inputWidth;
			formCupboardCost.value = inputCost;
		};
		if (index === 2) {

			form = shkafForm[2];
			shkafFormWidth = form.querySelectorAll('.bottom-table__center');
			shkafFormCost = form.querySelectorAll('.bottom-table__right');
			shkafFormCheck = form.elements.tableshkafbtn

			shkafFormType = 'четырехдверный шкаф купе';

			shkafFormCheck.forEach(function (item, index) {
				if (shkafFormCheck[index].checked == true) {
					inputWidth = shkafFormWidth[index].innerHTML
					inputCost = shkafFormCost[index].innerHTML
				}
			})

			formCupboardType.value = shkafFormType;
			formCupboardWidth.value = inputWidth;
			formCupboardCost.value = inputCost;
		};
	})
});

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.anim__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth'
			}),
				e.preventDefault();
		}
	}
};
