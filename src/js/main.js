// enable strict mode
'use strict';

document.addEventListener('DOMContentLoaded', () => {
   const body = document.querySelector('body');
   body.classList.remove('preload');
   
   // MAIN SLIDER
   const sliderMain = new Splide('.main-slider', {
      speed: 800,
      perPage: 1,
      arrows: false,
      pagination: true
   });
   sliderMain.mount();

   // IDEAS SLIDER
   const ideaSlider = new Splide( '.idea-slider', {
      type   : 'loop',
      perPage: 4,
      perMove: 1,
      gap: 30,
      speed: 800,
      updateOnMove: true,
      flickMaxPages: 1,
      swipeDistanceThreshold: 10,
      pagination: false,
      waitForTransition: false,
      classes: {
         arrows: 'idea-slider__pagination',
         arrow : 'idea-slider__arrow',
         prev  : 'idea-slider__prev',
         next  : 'idea-slider__next',
      }
   } )
   ideaSlider.mount();

   const ideaLinks = document.querySelectorAll('.ideas .idea-card__img');
   ideaLinks.forEach(item => {
      item.addEventListener('click', function() {
         const parent = item.parentNode;
         const index = parent.dataset.slide;
         ideaSlider.go( index - 1);
      })
   })

// VISIT SLIDER 
   const visitSlider = new Splide( '.visit-slider', {
      type   : 'loop',
      perPage: 4,
      perMove: 1,
      gap: 30,
      speed: 800,
      updateOnMove: true,
      flickMaxPages: 1,
      swipeDistanceThreshold: 10,
      pagination: false,
      waitForTransition: false,
      classes: {
         arrows: 'visit-slider-pagination',
         arrow : 'visit-slider__arrow',
         prev  : 'visit-slider-prev',
         next  : 'visit-slider-next',
      }
   } )
   visitSlider.mount();

   // NAVIGATION
   const menuButton = document.querySelector('.js-menu');
   const closeMenuButton = document.querySelector('.js-close-menu');
   const menu = document.querySelector('.nav');
   const submenuLinks = document.querySelectorAll('.nav__link--submenu');
   const nav = document.querySelector('.nav')
   const searchBtn = document.querySelector('.js-search');
   const search = document.querySelector('.header__search')

   const debounce = function (fn) { 
      var timeout;
      return function () {
         var context = this;
         var args = arguments;
         if (timeout) {
            window.cancelAnimationFrame(timeout);
         }
         timeout = window.requestAnimationFrame(function () {
            fn.apply(context, args);
         });
   
      }
   
   };
   
   const getDimensions = function() {
      const w = window.innerWidth;
      if (w <= 992) {
         nav.classList.remove('nav--desktop')
      } else {
         nav.classList.add('nav--desktop')
      }
    }

   const getDimensionsDebounce = debounce(getDimensions);

   const animateMenu = function() {
      const action = menu.classList.contains('is-menu-visible') ? 'show' : 'hide';
      const ctr = 0;
      if (action === 'show') {
         menu.style.display = 'block';
         menu.style.opacity = 0;
         setTimeout(() => {
            menu.style.opacity = 1;
         }, 0);
      }
      if (action === 'hide') {
         menu.style.display = 'block';
         menu.style.opacity = 0;
         setTimeout(() => {
            menu.style.display = 'none';
         }, 450);
      }
   }

   const animateSearch = function() {
      const action = search.classList.contains('mobile-search-visible') ? 'show' : 'hide';
      const ctr = 0;
      if (action === 'show') {
         search.style.display = 'flex';
         search.style.opacity = 0;
         setTimeout(() => {
            search.style.opacity = 1;
         }, 0);
      }
      if (action === 'hide') {
         search.style.display = 'flex';
         search.style.opacity = 0;
         setTimeout(() => {
            search.style.display = 'none';
         }, 450);
      }
   }
   
   if (menuButton) {
      menuButton.addEventListener('click', function() {
         menu.classList.add('is-menu-visible');
         animateMenu();
      });
   }
   
   closeMenuButton.addEventListener('click', function() {
      menu.classList.remove('is-menu-visible');
      animateMenu();
   });
   
   window.addEventListener('resize', function() {
      getDimensionsDebounce();
   });
   
   submenuLinks.forEach(link => {
      link.addEventListener('click', function() {
         link.classList.toggle('nav__link--opened');
      })
   })

   searchBtn.addEventListener('click', function() {
      search.classList.toggle('mobile-search-visible');
      const target = search.querySelector('input');
      animateSearch();
      target.focus();
   })
   
   getDimensions();
});
