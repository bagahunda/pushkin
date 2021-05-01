// enable strict mode
'use strict';
document.addEventListener('DOMContentLoaded', () => {
   const sliderMain = new Swiper('.main-slider', {
      pagination: {
         el: '.main-slider__pagination',
         clickable: true,
      },
   });

   const ideaSlider = new Swiper('.idea-slider', {
      slidesPerView: 'auto',
      freeMode: true,
      spaceBetween: 30,
      navigation: {
         nextEl: '.idea-slider__next',
         prevEl: '.idea-slider__prev',
       },   
   });

   const visitSlider = new Swiper('.visit-slider', {
      slidesPerView: 'auto',
      freeMode: true,
      spaceBetween: 30,
      navigation: {
         nextEl: '.visit-slider-next',
         prevEl: '.visit-slider-prev',
       },   
   });
});

const menuButton = document.querySelector('.js-menu');
const closeMenuButton = document.querySelector('.js-close-menu');
const menu = document.querySelector('.nav');

menuButton.addEventListener('click', function() {
   menu.classList.add('is-menu-visible');
});

closeMenuButton.addEventListener('click', function() {
   menu.classList.remove('is-menu-visible');
});