"use strict";

// Бургер меню
const body = document.querySelector("body");
const navBar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
	menu.classList.add('_active');
	menuBtn.classList.add('hide');
	body.classList.add('lock');
};

cancelBtn.onclick = () => {
	menu.classList.remove('_active');
	menuBtn.classList.remove('hide');
	body.classList.remove('lock');
};

// Кнопка возврата в шапку + статус бар в ней

let calcScrollValue = () => {
   let scrollProgress = document.getElementById('progressButton');
   let progressValue = document.getElementById('progressButton__value'); 
   let pos = document.documentElement.scrollTop; 
   let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   let scrollValue = Math.round((pos * 100) / calcHeight);

   if (pos > 100) {
      scrollProgress.style.display = 'grid'; 
   } else {
      scrollProgress.style.display = 'none'; 
   }

   scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0; 
   });
   scrollProgress.style.background = `conic-gradient(#ffa500 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onload = calcScrollValue;
window.addEventListener('scroll',calcScrollValue);

// Sticky-анимация

window.addEventListener('scroll', function () {
	this.scrollY > 20 ? navBar.classList.add('sticky') : navBar.classList.remove('sticky');	
});

// Прокрутка при клике 

let menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight - 30;


			// закрытие бургер меню, при нажатии на ссылку

			// if (iconMenu.classList.contains('_active')) {
			// 	document.body.classList.remove('_lock');
			// 	iconMenu.classList.remove('_active');
			// 	menuBody.classList.remove('_active');
			// }

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
