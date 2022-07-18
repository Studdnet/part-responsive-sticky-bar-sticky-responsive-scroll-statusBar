// Слайдер 

let myImageSlider = new Swiper('.image-slider', {
	//Стрелки навигации 
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	 },
	 pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	 },
	//  scrollbar: {
	// 	el:'.swiper-scrollbar',
	// 	draggable: true
	//  },
	//Перетаскивание на ПК 
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	//Курсор перетаскивания
	grabCursor: true,
	//Переключение при клике на слайд
	slideToClickedSlide: true,
	//Управление клавиатурой 
	keyboard: {
		//Включить (выключить)
		enable: true,
		//включить (выключить) только когда слайд в пределах вьюпорта
		onlyInViewport: true,
		//включить (выключить) управление клавиатурой pageUp, pageDown 
	},

	// управление с помощью колеса мыши 
	// mousewheel: {
		// чувствительность колеса мыши
		// sensitive: 1,
		//Класс объекта на котором будет срабатывать прокрутка мыши 
	// 	eventsTarget: ".image-slider"
	// },

	// Автовысота изображений
	autoHeight: true,

	// Количество слайдов для показа
	slidesPerView: 2,

	// Отключение функционала если количество слайдов меньше, чем нужно
	watchOverflow: true,

	// Отступ между слайдами
	spaceBetween: 30,

	//Количество пролистываемых слайдов 
	slidesPerGroup: 1,

	// Активный слайд по центру
	// centeredSlides: true,

	// Стартовый слайд (отсчет идет от нуля)
	initialSlide: 0,

	// Бесконечный слайдер 
	loop: true,

	// Свободный режим 
	freeMode: true,

	// Автопрокрутка 
	// autoplay: {
	// 	//Пауза между прокруткой 
	// 	delay: 1000,
	// 	// Закончить на последнем слайде 
	// 	stopLastSlide: false,
	// 	//Отключить после ручного переключения 
	// 	disableOnInteraction: false,
	// },

	// Скорость переключения слайдов чем больше, тем медленее
	speed: 400,
	// Брейк поинты (адаптив) 
	// Ширина экрана
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		}
	},
});

// Запуск автопрокрутки при наведении 
let sliderBlock = document.querySelector('.image-slider');

sliderBlock.addEventListener("mouseenter", function (e) {
	myImageSlider.params.autoplay.disableOnInteraction = false;
	myImageSlider.params.autoplay.delay = 800;
	myImageSlider.autoplay.start();
});
sliderBlock.addEventListener("mouseleave", function (e) {
	myImageSlider.autoplay.stop();
});