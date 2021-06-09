"use strict";document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector("body");t.classList.remove("preload");var e=document.querySelector(".main-slider");!e||(l=new Splide(e,{speed:800,perPage:1,arrows:!1,pagination:!0}))&&l.mount();var n,i=document.querySelector(".idea-slider");i&&((n=new Splide(i,{type:"loop",perPage:4,perMove:1,gap:30,speed:800,updateOnMove:!0,flickMaxPages:1,swipeDistanceThreshold:10,pagination:!1,waitForTransition:!1,classes:{arrows:"idea-slider__pagination",arrow:"idea-slider__arrow",prev:"idea-slider__prev",next:"idea-slider__next"}}))&&n.mount(),(h=document.querySelectorAll(".ideas .idea-card__img"))&&h.forEach(function(t){t.addEventListener("click",function(){var e=t.parentNode.dataset.slide;n.go(e-1)})}));var r=document.querySelector(".visit-slider");!r||(v=new Splide(r,{type:"loop",perPage:4,perMove:1,gap:30,speed:800,updateOnMove:!0,flickMaxPages:1,swipeDistanceThreshold:10,pagination:!1,waitForTransition:!1,classes:{arrows:"visit-slider-pagination",arrow:"visit-slider__arrow",prev:"visit-slider-prev",next:"visit-slider-next"}}))&&v.mount();var o=document.querySelectorAll(".subcat-slider");o&&o.forEach(function(e,t){window["innerSlider".concat(t)]=new Splide(e,{type:"loop",perPage:4,perMove:1,gap:30,speed:800,flickMaxPages:1,pagination:!1,classes:{arrows:"subcat-slider__arrows",arrow:"subcat-slider__arrow",prev:"subcat-slider__prev",next:"subcat-slider__next"},breakpoints:{1200:{perPage:3},992:{perPage:2},576:{perPage:1}}}),window["innerSlider".concat(t)]&&window["innerSlider".concat(t)].mount()});var s=document.querySelector(".product-slider__main");s&&(y=new Splide(s,{pagination:!1,classes:{arrows:"product-slider__arrows",arrow:"product-slider__arrow",prev:"product-slider__prev",next:"product-slider__next"}}),(S=new Splide(".product-slider-thumb",{fixedWidth:120,gap:10,pagination:!1,arrows:!1,isNavigation:!0,classes:{arrows:"product-slider-thumb__arrows",arrow:"product-slider-thumb__arrow",prev:"product-slider-thumb__prev",next:"product-slider-thumb__next"},breakpoints:{550:{fixedWidth:65}}})).mount(),y.sync(S).mount());function a(n,i){if(Array.isArray(n))return!!n.length&&n.map(function(e){return new a(e,i)});({init:function(){this.options=Object.assign({elementClass:"star",activeColor:"#5100D3",baseColor:"#BDBDBD"},i);var e="string"==typeof n;if(this.container=e?document.querySelector(n):n,this.rating=this.container.dataset.rating,Number.isInteger(this.rating)||(this.percent="".concat(Math.ceil(100*(this.rating-Math.floor(this.rating))),"%")),!this.rating)throw new Error("You must provide data-rating on stars container");var t=this.options.elementClass;this.elements=Array.from(this.container.childNodes).filter(function(e){return e.classList&&e.classList.contains(t)}),this.elements.forEach(function(e){var t="_".concat(Math.random().toString(36).substr(2,9)),n=e.querySelector("linearGradient"),e=e.querySelector("path");n.id="gradient".concat(t),e.setAttribute("fill","url(#gradient".concat(t,")"))}),this.target=this.rating<5?this.elements[Math.floor(this.rating)]:this.elements[4],this.elements.length=Math.floor(this.rating),this.setRating()},setRating:function(){this.elements.forEach(function(e){e.classList.add("star--filled")});var e=this.target.querySelector(".color1-start"),t=this.target.querySelector(".color1-end"),n=this.target.querySelector(".color2-start");e.setAttribute("stop-color",this.options.activeColor),t.setAttribute("stop-color",this.options.activeColor),this.percent&&(t.setAttribute("offset",this.percent),n.setAttribute("offset",this.percent))}}).init()}e=document.querySelectorAll(".stars");e&&e.forEach(function(e,t){window["nubmerInput".concat(t)]=new a(e),console.log("🚀 ~ file: main.js ~ line 210 ~ starsContainer.forEach ~ window[`nubmerInput${index}`]",window["nubmerInput".concat(t)])});function c(t,n){if(Array.isArray(t))return!!t.length&&t.map(function(e){return new numberInput(e,n)});({init:function(){this.options=Object.assign({max:100,min:1,step:1},n);var e="string"==typeof t;this.container=e?document.querySelector(t):t;e=Array.from(this.container.querySelectorAll(".number-input__button"));this.targetInput=this.container.querySelector("input"),this.decButton=e[0],this.incButton=e[1],this.decButton.addEventListener("click",this.decrement.bind(this)),this.incButton.addEventListener("click",this.increment.bind(this))},decrement:function(){var e=+this.targetInput.value;if(!(e>this.options.min))return!1;this.targetInput.value=e-1},increment:function(){var e=+this.targetInput.value;if(!(e<this.options.max))return!1;this.targetInput.value=1+e}}).init()}var l=document.querySelectorAll(".number-input");l&&l.forEach(function(e,t){window["nubmerInput".concat(t)]=new c(e)});i=document.querySelector(".accordeon");i&&new Accordion(i,{elementClass:"accordeon__item",triggerClass:"accordeon__trigger",panelClass:"accordeon__panel",activeClass:"accordeon__item--active",showMultiple:!0}).open(1);function d(n){var i;return function(){var e=this,t=arguments;i&&window.cancelAnimationFrame(i),i=window.requestAnimationFrame(function(){n.apply(e,t)})}}function u(){var e=m.offsetHeight;t.style.paddingTop="".concat(e,"px"),m.classList.contains("top--pinned")||(m.style.top="-".concat(e,"px"))}function p(){var t=m.offsetHeight,n=0;document.addEventListener("scroll",function(){var e=window.scrollY||window.pageYOffset;t<=e?(e<n?(m.classList.add("top--pinned"),m.style.top=0):(m.classList.remove("top--pinned"),m.style.top="-".concat(t,"px")),n=e):(m.classList.add("top--pinned"),m.style.top=0)})}var m=document.querySelector(".top"),h=document.querySelector(".js-menu"),r=document.querySelector(".js-close-menu"),f=document.querySelector(".nav"),v=document.querySelectorAll(".nav__link--submenu"),g=document.querySelector(".nav"),o=document.querySelector(".js-search"),w=document.querySelector(".header__search"),_=document.querySelector(".filters__items"),s=document.querySelectorAll(".filters__item"),y=document.querySelector(".js-filters"),S=document.querySelector(".js-filters-close"),e=document.querySelectorAll(".share"),l=document.querySelector(".product__options"),i=function(){window.innerWidth<=992?g.classList.remove("nav--desktop"):g.classList.add("nav--desktop")},b=d(i);h&&h.addEventListener("click",function(){f.classList.add("is-menu-visible"),t.classList.add("overflow")}),r.addEventListener("click",function(){f.classList.remove("is-menu-visible"),t.classList.remove("overflow")}),window.addEventListener("resize",function(){b(),d(u()),d(p())}),v.forEach(function(e){e.addEventListener("click",function(){e.classList.toggle("nav__link--opened")})}),o.addEventListener("click",function(){w.classList.toggle("mobile-search-visible");var e=w.querySelector("input");!function(e,t,n){t=e.classList.contains(t)?"show":"hide";"show"==t&&(e.style.display=n,e.style.opacity=0,setTimeout(function(){e.style.opacity=1},0)),"hide"==t&&(e.style.display=n,e.style.opacity=0,setTimeout(function(){e.style.display="none"},450))}(w,"mobile-search-visible",flex),e.focus()}),y&&y.addEventListener("click",function(){_.classList.add("filters__items--mobile"),t.classList.add("overflow")}),S&&S.addEventListener("click",function(){_.classList.remove("filters__items--mobile"),t.classList.remove("overflow")}),s&&s.forEach(function(e){e.addEventListener("click",function(){window.innerWidth<992&&e.classList.toggle("filters__item--opened")})}),e&&e.forEach(function(e){e.addEventListener("click",function(){e.classList.toggle("share--opened")})}),l&&l.querySelectorAll(".product__option-items").forEach(function(e){var t=e.querySelectorAll("label");e.style.width="".concat(50*t.length+10*(t.length-1),"px")}),i(),u(),p()});