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
   const subcatBlock = document.querySelectorAll('.subcat-slider');
   if (subcatBlock) {
      subcatBlock.forEach((block, index) => {
         window[`innerSlider${index}`] = new Splide(block, {
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
         window[`innerSlider${index}`] && window[`innerSlider${index}`].mount();
      })
   }

   //Product slider
   const product = document.querySelector('.product-slider__main');
   if (product) {
      const productSlider = new Splide(product, {
         pagination: false,
         classes: {
            arrows: 'product-slider__arrows',
            arrow: 'product-slider__arrow',
            prev: 'product-slider__prev',
            next: 'product-slider__next'
         }
      });

      const productThumbSlider = new Splide('.product-slider-thumb', {
         fixedWidth: 120,
         gap: 10,
         pagination: false,
         arrows: false,
         isNavigation: true,
         classes: {
            arrows: 'product-slider-thumb__arrows',
            arrow: 'product-slider-thumb__arrow',
            prev: 'product-slider-thumb__prev',
            next: 'product-slider-thumb__next'
         },
         breakpoints: {
            550: {
               fixedWidth: 65
            }
         }
      });
      productThumbSlider.mount();
      productSlider.sync(productThumbSlider).mount();
   }

   //STAR RATING

   const Starify = function(selectorOrElement, userOptions) {
      if (Array.isArray(selectorOrElement)) {
         if (selectorOrElement.length) {
            return selectorOrElement.map(item => new Starify(item, userOptions));
         }

         return false;
      }

      const core = {
         init() {
            const defaults = {
               elementClass: 'star',
               activeColor: '#5100D3',
               baseColor: '#BDBDBD',
               readOnly: true
            }

            this.options = Object.assign(defaults, userOptions);

            const isString = (typeof selectorOrElement === 'string');

            this.container = isString ? document.querySelector(selectorOrElement) : selectorOrElement;

            this.rating = this.container.dataset.rating;
                        
            if (!Number.isInteger(this.rating)) {
               this.percent = `${Math.ceil((this.rating - Math.floor(this.rating)) * 100)}%`;
            }

            if (!this.rating) {
               throw new Error('You must provide data-rating on stars container');
            }
            const { elementClass } = this.options;

            this.elements = Array.from(this.container.childNodes).filter(el => el.classList && el.classList.contains(elementClass));

            this.elements.forEach(el => {
               const id = `_${Math.random().toString(36).substr(2, 9)}`;
               const gr = el.querySelector('linearGradient');
               const path = el.querySelector('path');
               gr.id = `gradient${id}`;
               path.setAttribute('fill', `url(#gradient${id})`)
            })

            this.target = this.rating < 5 ? this.elements[Math.floor(this.rating)] : this.elements[4];

            this.elements.length = Math.floor(this.rating);

            this.setRating();

            if (!this.options.readOnly) {
               const stars = Array.from(this.container.childNodes).filter(el => el.classList && el.classList.contains(elementClass))
               stars.forEach((element, index) => {
                  element.addEventListener('click', function() {
                     for (let i = 0; i <= index; i += 1) {
                        stars[i].classList.add('star--filled');
                     }
                     for (let i = index + 1; i < stars.length; i += 1) {
                        stars[i].classList.remove('star--filled');
                     }
                  })
               })
            }
         },

         setRating() {
            this.elements.forEach(element => {
               element.classList.add('star--filled')
            })
            const col1 = this.target.querySelector('.color1-start');
            const col2 = this.target.querySelector('.color1-end');
            const col3 = this.target.querySelector('.color2-start');
            col1.setAttribute('stop-color', this.options.activeColor);
            col2.setAttribute('stop-color', this.options.activeColor);
            if (this.percent) {
               col2.setAttribute('offset', this.percent)
               col3.setAttribute('offset', this.percent)
            }
         }
      }

      core.init();
   };

   const starsContainer = document.querySelectorAll('.js-show-stars');

   if (starsContainer) {
      starsContainer.forEach((star, index) => {
         window[`stars${index}`] = new Starify(star);
      })
      // const starsRating = new Starify(starsContainer);
   }

   const reviewStarContainer = document.querySelectorAll('.js-set-stars');
   if (reviewStarContainer) {
      reviewStarContainer.forEach((el, index) => {
         window[`starsRate${index}`] = new Starify(el, { readOnly: false });
      })
   }

   // NUMBER INPUT

   const NumberInput = function(selectorOrElement, userOptions) {
      if (Array.isArray(selectorOrElement)) {
         if (selectorOrElement.length) {
            return selectorOrElement.map(item => new numberInput(item, userOptions));
         }

         return false;
      }

      const core = {
         init() {
            const defaults = {
               max: 100,
               min: 1,
               step: 1
            }

            this.options = Object.assign(defaults, userOptions);

            const isString = (typeof selectorOrElement === 'string');

            this.container = isString ? document.querySelector(selectorOrElement) : selectorOrElement;

            const buttons = Array.from(this.container.querySelectorAll('.number-input__button'));
            
            this.targetInput = this.container.querySelector('input');            
            this.decButton = buttons[0];
            this.incButton = buttons[1];

            this.decButton.addEventListener('click', this.decrement.bind(this));
            this.incButton.addEventListener('click', this.increment.bind(this));

         },

         decrement(target) {
            const val = +this.targetInput.value;
            if (val > this.options.min) {
               this.targetInput.value = val - 1;
            } else {
               return false;
            }
         },
   
         increment(target) {
            const val = +this.targetInput.value;
            if (val < this.options.max) {
               this.targetInput.value = val + 1;
            } else {
               return false
            }
         }
      };


      core.init();
   };

   const numberInputs = document.querySelectorAll('.number-input');
   if (numberInputs) {
      numberInputs.forEach((input, index) => {
         window[`nubmerInput${index}`] = new NumberInput(input);
      })
   }

   // ACCORDEON

   const accordeonContainer = document.querySelector('.accordeon');

   if (accordeonContainer) {
      const accordeon = new Accordion(accordeonContainer, {
         elementClass: 'accordeon__item',
         triggerClass: 'accordeon__trigger',
         panelClass: 'accordeon__panel',
         activeClass: 'accordeon__item--active',
         showMultiple: true
      });
      accordeon.open(1)
   }

   // MODAL

   const Modal = function(selectorOrElement, userOptions) {
      if (Array.isArray(selectorOrElement)) {
         if (selectorOrElement.length) {
            return selectorOrElement.map(item => new Modal(item, userOptions));
         }

         return false;
      }

      const defaults = {}

      this.options = Object.assign(defaults, userOptions);

      const isString = (typeof selectorOrElement === 'string');

      let isBusy = false;

      const container = isString ? document.querySelector(selectorOrElement) : selectorOrElement;

      const body = document.querySelector('body');

      const listener = function(event) {
         if (event.target.dataset.close) {
            close();
         }
      };

      const escListener = function(event) {
         if (event.key === 'Escape') {
            close();
         }
      }

      container.addEventListener('click', listener);

      function open() {
         if (isBusy) return;
         isBusy = true;
         document.addEventListener('keydown', escListener)
         container.style.display = 'block';
         setTimeout(() => {
            body.classList.add('overflow');
            isBusy = false;
         }, 100);
      }
      function close() {
         if (isBusy) return;
         isBusy = true;
         document.removeEventListener('keydown', escListener)
         body.classList.remove('overflow');
         setTimeout(() => {
            container.style.display = 'none';
            isBusy = false;
         }, 300);
      }
      function destroy() {
         container.removeEventListener('click', listener);
      }

      return {
         open,
         close,
         destroy
      }
   }

   const reviewModalBlock = document.querySelector('.review-modal');
   if (reviewModalBlock) {
      const reviewModal = new Modal(reviewModalBlock);
      const reviewModalBtn = document.querySelector('.js-review-modal');
      reviewModalBtn.addEventListener('click', reviewModal.open);
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
   const filtesLinks = document.querySelectorAll('.filters__item')
   const filtersButton = document.querySelector('.js-filters')
   const filtersCloseBtn = document.querySelector('.js-filters-close');
   const shareLinks = document.querySelectorAll('.share');
   const productOptions = document.querySelector('.product__options');

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

   if (filtesLinks) {
      filtesLinks.forEach(link => {
         link.addEventListener('click', function() {
            const isFiltersMobile = window.innerWidth < 992;
            if (isFiltersMobile) {
               // const parent = link.parentElement;
               link.classList.toggle('filters__item--opened');
            }
         })
      })
   }

   if (shareLinks) {
      shareLinks.forEach(link => {
         link.addEventListener('click', function() {
            link.classList.toggle('share--opened');
         })
      })
   }

   if (productOptions) {
      const options = productOptions.querySelectorAll('.product__option-items');
      options.forEach(option => {
         const selectors = option.querySelectorAll('label');
         option.style.width = `${(selectors.length * 50) + ((selectors.length - 1) * 10)}px`;
      })
   }
   
   getDimensions();
   setBodyTopPadding();
   addScrollListener();
});
