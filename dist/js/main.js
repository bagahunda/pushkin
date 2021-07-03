"use strict";document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector("body");t.classList.remove("preload");var e=document.querySelector(".main-slider");!e||(v=new Splide(e,{speed:800,perPage:1,arrows:!1,pagination:!0}))&&v.mount();var n,o=document.querySelector(".idea-slider");o&&((n=new Splide(o,{type:"loop",perPage:4,perMove:1,gap:30,speed:800,updateOnMove:!0,flickMaxPages:1,swipeDistanceThreshold:10,pagination:!1,waitForTransition:!1,classes:{arrows:"idea-slider__pagination",arrow:"idea-slider__arrow",prev:"idea-slider__prev",next:"idea-slider__next"}}))&&n.mount(),(y=document.querySelectorAll(".ideas .idea-card__img"))&&y.forEach(function(t){t.addEventListener("click",function(){var e=t.parentNode.dataset.slide;n.go(e-1)})}));var r=document.querySelector(".visit-slider");!r||(E=new Splide(r,{type:"loop",perPage:4,perMove:1,gap:30,speed:800,updateOnMove:!0,flickMaxPages:1,swipeDistanceThreshold:10,pagination:!1,waitForTransition:!1,classes:{arrows:"visit-slider-pagination",arrow:"visit-slider__arrow",prev:"visit-slider-prev",next:"visit-slider-next"}}))&&E.mount();var i=document.querySelectorAll(".subcat-slider");i&&i.forEach(function(e,t){window["innerSlider".concat(t)]=new Splide(e,{type:"loop",perPage:4,perMove:1,gap:30,speed:800,flickMaxPages:1,pagination:!1,classes:{arrows:"subcat-slider__arrows",arrow:"subcat-slider__arrow",prev:"subcat-slider__prev",next:"subcat-slider__next"},breakpoints:{1200:{perPage:3},992:{perPage:2},576:{perPage:1}}}),window["innerSlider".concat(t)]&&window["innerSlider".concat(t)].mount()});var c=document.querySelector(".blogpost-slider");c&&new Splide(c,{type:"loop",perPage:3,perMove:1,gap:30,speed:800,flickMaxPages:1,pagination:!1,classes:{arrows:"subcat-slider__arrows",arrow:"subcat-slider__arrow",prev:"subcat-slider__prev",next:"subcat-slider__next"},breakpoints:{992:{perPage:2},768:{perPage:1}}}).mount();var s,a=document.querySelector(".product-slider__main");a&&(M=new Splide(a,{pagination:!1,classes:{arrows:"product-slider__arrows",arrow:"product-slider__arrow",prev:"product-slider__prev",next:"product-slider__next"}}),(j=new Splide(".product-slider-thumb",{fixedWidth:120,gap:10,pagination:!1,arrows:!1,isNavigation:!0,classes:{arrows:"product-slider-thumb__arrows",arrow:"product-slider-thumb__arrow",prev:"product-slider-thumb__prev",next:"product-slider-thumb__next"},breakpoints:{550:{fixedWidth:65}}})).mount(),M.sync(j).mount()),document.querySelector(".about__review-slider")&&((s=new Splide(".about__review-slider",{pagination:!1,arrows:!1,perPage:1,type:"loop"})).mount(),P=document.querySelector(".about__reviews-slider-button--next"),B=document.querySelector(".about__reviews-slider-button--prev"),P.addEventListener("click",function(){s.go("+")}),B.addEventListener("click",function(){s.go("-")}));function l(n,r){if(Array.isArray(n))return!!n.length&&n.map(function(e){return new l(e,r)});({init:function(){this.options=Object.assign({elementClass:"star",activeColor:"#5100D3",baseColor:"#BDBDBD",readOnly:!0},r);var e="string"==typeof n;if(this.container=e?document.querySelector(n):n,this.rating=this.container.dataset.rating,Number.isInteger(this.rating)||(this.percent="".concat(Math.ceil(100*(this.rating-Math.floor(this.rating))),"%")),!this.rating)throw new Error("You must provide data-rating on stars container");var o,t=this.options.elementClass;this.elements=Array.from(this.container.childNodes).filter(function(e){return e.classList&&e.classList.contains(t)}),this.elements.forEach(function(e){var t="_".concat(Math.random().toString(36).substr(2,9)),n=e.querySelector("linearGradient"),e=e.querySelector("path");n.id="gradient".concat(t),e.setAttribute("fill","url(#gradient".concat(t,")"))}),this.target=this.rating<5?this.elements[Math.floor(this.rating)]:this.elements[4],this.elements.length=Math.floor(this.rating),this.setRating(),this.options.readOnly||(o=Array.from(this.container.childNodes).filter(function(e){return e.classList&&e.classList.contains(t)})).forEach(function(e,n){e.addEventListener("click",function(){for(var e=0;e<=n;e+=1)o[e].classList.add("star--filled");for(var t=n+1;t<o.length;t+=1)o[t].classList.remove("star--filled")})})},setRating:function(){this.elements.forEach(function(e){e.classList.add("star--filled")});var e=this.target.querySelector(".color1-start"),t=this.target.querySelector(".color1-end"),n=this.target.querySelector(".color2-start");e.setAttribute("stop-color",this.options.activeColor),t.setAttribute("stop-color",this.options.activeColor),this.percent&&(t.setAttribute("offset",this.percent),n.setAttribute("offset",this.percent))}}).init()}var d=document.querySelectorAll(".js-show-stars");d&&d.forEach(function(e,t){window["stars".concat(t)]=new l(e)});var u=document.querySelectorAll(".js-set-stars");u&&u.forEach(function(e,t){window["starsRate".concat(t)]=new l(e,{readOnly:!1})});function p(t,n){if(Array.isArray(t))return!!t.length&&t.map(function(e){return new numberInput(e,n)});({init:function(){this.options=Object.assign({max:100,min:1,step:1},n);var e="string"==typeof t;this.container=e?document.querySelector(t):t;e=Array.from(this.container.querySelectorAll(".number-input__button"));this.targetInput=this.container.querySelector("input"),this.decButton=e[0],this.incButton=e[1],this.decButton.addEventListener("click",this.decrement.bind(this)),this.incButton.addEventListener("click",this.increment.bind(this))},decrement:function(){var e=+this.targetInput.value;if(!(e>this.options.min))return!1;this.targetInput.value=e-1},increment:function(){var e=+this.targetInput.value;if(!(e<this.options.max))return!1;this.targetInput.value=1+e}}).init()}var m=document.querySelectorAll(".number-input");m&&m.forEach(function(e,t){window["nubmerInput".concat(t)]=new p(e)});e=document.querySelector(".accordeon");e&&new Accordion(e,{elementClass:"accordeon__item",triggerClass:"accordeon__trigger",panelClass:"accordeon__panel",activeClass:"accordeon__item--active",showMultiple:!0}).open(1);function f(e,t){var n={},o=e,r=Array.from(o.querySelectorAll("option")).map(function(e){return e.textContent});if(n.optionsValues=r,r=o.querySelector("select").dataset.placeholder||"Выберите",n.placeholder=r,o.innerHTML='\n          <div class="select__value" data-type="value">'.concat(n.placeholder,'</div>\n          <div class="select__dropdown">\n            <div class="select__dropdown-items" role="listbox">\n               ').concat(n.optionsValues.map(function(e){return'\n                  <div class="select__dropdown-item" data-type="item" role="option" tabindex="0">\n                     '.concat(e,"\n                  </div>\n                  ")}).join(""),"\n            </div>\n          </div>\n          "),Array.isArray(e))return!!e.length&&e.map(function(e){return new f(e,t)});var i=o.querySelector(".select__dropdown"),c=o.querySelector(".select__dropdown-items"),s=o.querySelector('[data-type="value"]');function a(e){var t=e.target.dataset.type;"value"===t?d():"item"===t?u(e.target):m()}function l(e){e.preventDefault(),e.stopPropagation(),38===e.keyCode&&e.target.previousElementSibling?e.target.previousElementSibling.focus():40===e.keyCode&&e.target.nextElementSibling?e.target.nextElementSibling.focus():27===e.keyCode?m():13!==e.keyCode&&32!==e.keyCode||u(e.target)}function d(){o.classList.contains("select--open")?m():(p(),c.children[0].focus())}function u(e){s.textContent=e.textContent,t.onSelect&&t.onSelect(e.textContent),m()}function p(){i.style.display="block",setTimeout(function(){o.classList.add("select--open")},0)}function m(){o.classList.remove("select--open"),setTimeout(function(){i.style.display="none"},300),o.focus()}return o.addEventListener("click",a),o.addEventListener("keydown",function(e){27===e.keyCode?(e.preventDefault(),m()):13!==e.keyCode&&32!==e.keyCode||(e.preventDefault(),d())}),Array.from(c.children).forEach(function(e){e.addEventListener("keydown",l)}),{open:p,close:m,select:u,destroy:function(){o.removeEventListener("click",a)}}}var v=document.querySelector("#countrySelect"),o=document.querySelector("#citySelect"),y=document.querySelector("#cabinetCountrySelect");function g(e){e=e.target;e.parentNode.classList.add("active"),e.setAttribute("placeholder",e.getAttribute("data-placeholder"))}function h(e){e=e.target;e.value||e.parentNode.classList.remove("active"),e.removeAttribute("placeholder")}v&&f(v,{onSelect:function(e){console.log("country selected ->",e.trim())}}),o&&f(o,{onSelect:function(e){console.log("city seected ->",e.trim())}}),y&&f(y,{onSelect:function(e){console.log("city seected ->",e.trim())}}),{init:function(){var e=document.querySelectorAll(".float-input, .float-textarea");e.length&&e.forEach(function(e){var t;(e.querySelector("input")&&e.querySelector("input").value||e.querySelector("textarea")&&e.querySelector("textarea").value)&&e.classList.add("active"),e=(t=e).querySelector("input"),t=t.querySelector("textarea"),e&&(e.addEventListener("focus",g),e.addEventListener("blur",h)),t&&(t.addEventListener("focus",g),t.addEventListener("blur",h))})}}.init();function _(n){var o;return function(){var e=this,t=arguments;o&&window.cancelAnimationFrame(o),o=window.requestAnimationFrame(function(){n.apply(e,t)})}}function S(){var e=L.offsetHeight;t.style.paddingTop="".concat(e,"px"),L.classList.contains("top--pinned")||(L.style.top="-".concat(e,"px"))}function w(){var o=L.offsetHeight,r=0;document.addEventListener("scroll",function(){var e,t,n=window.scrollY||window.pageYOffset;D&&(e=(t=document.querySelector(".subscribe")).getBoundingClientRect().top-document.body.getBoundingClientRect().top,t=t.getBoundingClientRect().top-O,D<n&&n+O<e?(T.style.width="".concat(T.clientWidth,"px"),T.style.top="0",T.style.position="fixed"):t<=0?T.style.top="".concat(t,"px"):T.style.position="static"),o<=n?(n<r?(L.classList.add("top--pinned"),L.style.top=0):(L.classList.remove("top--pinned"),L.style.top="-".concat(o,"px")),r=n):(L.classList.add("top--pinned"),L.style.top=0)})}var b,q,L=document.querySelector(".top"),r=document.querySelector(".js-menu"),E=document.querySelector(".js-close-menu"),k=document.querySelector(".nav"),i=document.querySelectorAll(".nav__link--submenu"),x=document.querySelector(".nav"),c=document.querySelector(".js-search"),A=document.querySelector(".header__search"),C=document.querySelector(".filters__items"),a=document.querySelectorAll(".filters__item"),M=document.querySelector(".js-filters"),j=document.querySelector(".js-filters-close"),P=document.querySelectorAll(".share"),B=document.querySelector(".product__options"),d=document.querySelectorAll(".js-cart-remove"),T=document.querySelector(".checkout__summary"),D=T?T.getBoundingClientRect().top-document.body.getBoundingClientRect().top:null,O=T?T.offsetHeight:null,u=document.querySelector(".checkout .switch"),m=(document.querySelectorAll(".js-moneyback"),document.querySelector(".js-moneyback-next"),document.querySelectorAll(".js-subscribe-remove")),e=document.querySelector(".js-change-address"),v=document.querySelector(".js-reset-password"),o=document.querySelector("#qaModal"),y=function(){window.innerWidth<=992?x.classList.remove("nav--desktop"):x.classList.add("nav--desktop")},I=_(y);r&&r.addEventListener("click",function(){k.classList.add("is-menu-visible"),t.classList.add("overflow")}),E.addEventListener("click",function(){k.classList.remove("is-menu-visible"),t.classList.remove("overflow")}),window.addEventListener("resize",function(){I(),_(S()),_(w())}),i.forEach(function(e){e.addEventListener("click",function(){e.classList.toggle("nav__link--opened")})}),c.addEventListener("click",function(){A.classList.toggle("mobile-search-visible");var e=A.querySelector("input");!function(e,t,n){t=e.classList.contains(t)?"show":"hide";"show"==t&&(e.style.display=n,e.style.opacity=0,setTimeout(function(){e.style.opacity=1},0)),"hide"==t&&(e.style.display=n,e.style.opacity=0,setTimeout(function(){e.style.display="none"},450))}(A,"mobile-search-visible",flex),e.focus()}),M&&M.addEventListener("click",function(){C.classList.add("filters__items--mobile"),t.classList.add("overflow")}),j&&j.addEventListener("click",function(){C.classList.remove("filters__items--mobile"),t.classList.remove("overflow")}),a&&a.forEach(function(e){e.addEventListener("click",function(){window.innerWidth<992&&e.classList.toggle("filters__item--opened")})}),P&&P.forEach(function(e){e.addEventListener("click",function(){e.classList.toggle("share--opened")})}),B&&B.querySelectorAll(".product__option-items").forEach(function(e){var t=e.querySelectorAll("label");e.style.width="".concat(50*t.length+10*(t.length-1),"px")}),d&&d.forEach(function(e){e.addEventListener("click",function(e){var t=e.target.closest(".cart__item");t.classList.add("cart__item--removed"),setTimeout(function(){t.remove()},300)})}),u&&(u=u.querySelectorAll("input"),b=document.querySelector(".checkout__form"),u.forEach(function(e){e.addEventListener("change",function(e){var t,n=e.target.value;"Физлицо"===n&&(b.classList.remove("checkout__form--org"),b.classList.add("checkout__form--ordinal"),e=document.querySelector("#countrySelect"),t=document.querySelector("#citySelect"),e&&f(e,{onSelect:function(e){console.log("country selected ->",e.trim())}}),t&&f(t,{onSelect:function(e){console.log("city seected ->",e.trim())}})),"Юрлицо"===n&&(b.classList.remove("checkout__form--ordinal"),b.classList.add("checkout__form--org"),t=document.querySelector("#orgCountrySelect"),n=document.querySelector("#orgCitySelect"),t&&f(t,{onSelect:function(e){console.log("country selected ->",e.trim())}}),n&&f(n,{onSelect:function(e){console.log("city seected ->",e.trim())}}))})})),m&&m.forEach(function(e){e.addEventListener("click",function(e){var t=e.target.closest(".cabinetSubscribe__item");t.classList.add("cabinetSubscribe__item--removed"),setTimeout(function(){t.remove()},300)})}),e&&e.addEventListener("click",function(e){var t="Сохранить изменения"===e.target.textContent,n=document.querySelector(".cabinet__addresses .form");t?(n.classList.remove("form--edit"),e.target.textContent="Изменить адрес"):(n.classList.add("form--edit"),e.target.textContent="Сохранить изменения")}),v&&v.addEventListener("click",function(e){var t="Сохранить пароль"===e.target.textContent,n=document.querySelector(".cabinet__form");t?(n.classList.remove("cabinet__form--password-edit"),e.target.textContent="Сбросить пароль"):(n.classList.add("cabinet__form--password-edit"),e.target.textContent="Сохранить пароль")}),o&&(q=new bootstrap.Modal(o),document.querySelector("#qa-form").addEventListener("submit",function(e){e.preventDefault(),q.show()})),y(),S(),w()});