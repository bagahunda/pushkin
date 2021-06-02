// enable strict mode
'use strict';

document.addEventListener('DOMContentLoaded', () => {
   const body = document.querySelector('body');
   body.classList.remove('preload');
   
   // MAIN SLIDER
   const mainBlock = document.querySelector('.main-slider');
   if (mainBlock) {
      const sliderMain = new Splide(mainBlock, {
         speed: 800,
         perPage: 1,
         arrows: false,
         pagination: true
      });
      sliderMain && sliderMain.mount();
   }

   // IDEAS SLIDER
   const ideaBlock = document.querySelector('.idea-slider');
   if (ideaBlock) {
      const ideaSlider = new Splide(ideaBlock, {
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
      ideaSlider && ideaSlider.mount();
   
      const ideaLinks = document.querySelectorAll('.ideas .idea-card__img');
      ideaLinks && ideaLinks.forEach(item => {
         item.addEventListener('click', function() {
            const parent = item.parentNode;
            const index = parent.dataset.slide;
            ideaSlider.go( index - 1);
         })
      })
   }

// VISIT SLIDER
   const visitBlock = document.querySelector('.visit-slider');
   if (visitBlock) {
      const visitSlider = new Splide(visitBlock, {
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
      visitSlider && visitSlider.mount();
   }

   //CATEGORY PAGE SLIDER
   const subcatBlock = document.querySelector('.subcat-slider');
   if (subcatBlock) {
      const subcatSlider = new Splide(subcatBlock, {
         type: 'loop',
         perPage: 4,
         perMove: 1,
         gap: 30,
         speed: 800,
         flickMaxPages: 1,
         pagination: false,
         classes: {
            arrows: 'subcat-slider__arrows',
            arrow: 'subcat-slider__arrow',
            prev: 'subcat-slider__prev',
            next: 'subcat-slider__next'
         },
         breakpoints: {
            1200: {
               perPage: 3
            },
            992: {
               perPage: 2
            },
            576: {
               perPage: 1
            }
         }
      });
      subcatSlider && subcatSlider.mount();
   }

   // NAVIGATION
   const topBlock = document.querySelector('.top');
   const menuButton = document.querySelector('.js-menu');
   const closeMenuButton = document.querySelector('.js-close-menu');
   const menu = document.querySelector('.nav');
   const submenuLinks = document.querySelectorAll('.nav__link--submenu');
   const nav = document.querySelector('.nav')
   const searchBtn = document.querySelector('.js-search');
   const search = document.querySelector('.header__search')
   const filters = document.querySelector('.filters__items');
   const filtersButton = document.querySelector('.js-filters')
   const filtersCloseBtn = document.querySelector('.js-filters-close');

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

   const animateEl = function(el, className, displayProp) {
      const action = el.classList.contains(className) ? 'show' : 'hide';
      const ctr = 0;
      if (action === 'show') {
         el.style.display = displayProp;
         el.style.opacity = 0;
         setTimeout(() => {
            el.style.opacity = 1;
         }, 0);
      }
      if (action === 'hide') {
         el.style.display = displayProp;
         el.style.opacity = 0;
         setTimeout(() => {
            el.style.display = 'none';
         }, 450);
      }
   }

   const setBodyTopPadding = function() {
      const topHeight = topBlock.offsetHeight;
      body.style.paddingTop = `${topHeight}px`;
      if (!topBlock.classList.contains('top--pinned')) {
         topBlock.style.top = `-${topHeight}px`;
      }
   }

   const addScrollListener = function() {
      const topHeight = topBlock.offsetHeight;
      let topTrigger = 0;
      document.addEventListener('scroll', function() {
         const top = window.scrollY || window.pageYOffset;
         if (top >= topHeight) {
            if (top < topTrigger) {
               topBlock.classList.add('top--pinned');
               topBlock.style.top = 0;
            } else {
               topBlock.classList.remove('top--pinned')
               topBlock.style.top = `-${topHeight}px`;
            }
            topTrigger = top;
         } else {
            topBlock.classList.add('top--pinned');
            topBlock.style.top = 0;
         }
      });
   };
   
   if (menuButton) {
      menuButton.addEventListener('click', function() {
         menu.classList.add('is-menu-visible');
         body.classList.add('overflow');
      });
   }
   
   closeMenuButton.addEventListener('click', function() {
      menu.classList.remove('is-menu-visible');
      body.classList.remove('overflow');
   });
   
   window.addEventListener('resize', function() {
      getDimensionsDebounce();
      debounce(setBodyTopPadding());
      debounce(addScrollListener());
   });
   
   submenuLinks.forEach(link => {
      link.addEventListener('click', function() {
         link.classList.toggle('nav__link--opened');
      })
   })

   searchBtn.addEventListener('click', function() {
      search.classList.toggle('mobile-search-visible');
      const target = search.querySelector('input');
      animateEl(search, 'mobile-search-visible', flex);
      target.focus();
   })

   if (filtersButton) {
      filtersButton.addEventListener('click', function() {
         filters.classList.add('filters__items--mobile');
         body.classList.add('overflow');
      })
   }

   if (filtersCloseBtn) {
      filtersCloseBtn.addEventListener('click', function() {
         filters.classList.remove('filters__items--mobile');
         body.classList.remove('overflow');
      })
   }
   
   getDimensions();
   setBodyTopPadding();
   addScrollListener();
});
