"use strict";document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector("body");t.classList.remove("preload");var e=document.querySelector(".main-slider");!e||(d=new Splide(e,{speed:800,perPage:1,arrows:!1,pagination:!0}))&&d.mount();var n,r=document.querySelector(".idea-slider");r&&((n=new Splide(r,{type:"loop",perPage:4,perMove:1,gap:30,speed:800,updateOnMove:!0,flickMaxPages:1,swipeDistanceThreshold:10,pagination:!1,waitForTransition:!1,classes:{arrows:"idea-slider__pagination",arrow:"idea-slider__arrow",prev:"idea-slider__prev",next:"idea-slider__next"}}))&&n.mount(),(u=document.querySelectorAll(".ideas .idea-card__img"))&&u.forEach(function(t){t.addEventListener("click",function(){var e=t.parentNode.dataset.slide;n.go(e-1)})}));var o=document.querySelector(".visit-slider");!o||(p=new Splide(o,{type:"loop",perPage:4,perMove:1,gap:30,speed:800,updateOnMove:!0,flickMaxPages:1,swipeDistanceThreshold:10,pagination:!1,waitForTransition:!1,classes:{arrows:"visit-slider-pagination",arrow:"visit-slider__arrow",prev:"visit-slider-prev",next:"visit-slider-next"}}))&&p.mount();var i=document.querySelectorAll(".subcat-slider");i&&i.forEach(function(e,t){window["innerSlider".concat(t)]=new Splide(e,{type:"loop",perPage:4,perMove:1,gap:30,speed:800,flickMaxPages:1,pagination:!1,classes:{arrows:"subcat-slider__arrows",arrow:"subcat-slider__arrow",prev:"subcat-slider__prev",next:"subcat-slider__next"},breakpoints:{1200:{perPage:3},992:{perPage:2},576:{perPage:1}}}),window["innerSlider".concat(t)]&&window["innerSlider".concat(t)].mount()});var s=document.querySelector(".product-slider__main");s&&(_=new Splide(s,{pagination:!1,classes:{arrows:"product-slider__arrows",arrow:"product-slider__arrow",prev:"product-slider__prev",next:"product-slider__next"}}),(w=new Splide(".product-slider-thumb",{fixedWidth:120,gap:10,pagination:!1,arrows:!1,isNavigation:!0,classes:{arrows:"product-slider-thumb__arrows",arrow:"product-slider-thumb__arrow",prev:"product-slider-thumb__prev",next:"product-slider-thumb__next"},breakpoints:{550:{fixedWidth:65}}})).mount(),_.sync(w).mount());function c(n,o){if(Array.isArray(n))return!!n.length&&n.map(function(e){return new c(e,o)});({init:function(){this.options=Object.assign({elementClass:"star",activeColor:"#5100D3",baseColor:"#BDBDBD",readOnly:!0},o);var e="string"==typeof n;if(this.container=e?document.querySelector(n):n,this.rating=this.container.dataset.rating,Number.isInteger(this.rating)||(this.percent="".concat(Math.ceil(100*(this.rating-Math.floor(this.rating))),"%")),!this.rating)throw new Error("You must provide data-rating on stars container");var r,t=this.options.elementClass;this.elements=Array.from(this.container.childNodes).filter(function(e){return e.classList&&e.classList.contains(t)}),this.elements.forEach(function(e){var t="_".concat(Math.random().toString(36).substr(2,9)),n=e.querySelector("linearGradient"),e=e.querySelector("path");n.id="gradient".concat(t),e.setAttribute("fill","url(#gradient".concat(t,")"))}),this.target=this.rating<5?this.elements[Math.floor(this.rating)]:this.elements[4],this.elements.length=Math.floor(this.rating),this.setRating(),this.options.readOnly||(r=Array.from(this.container.childNodes).filter(function(e){return e.classList&&e.classList.contains(t)})).forEach(function(e,n){e.addEventListener("click",function(){for(var e=0;e<=n;e+=1)r[e].classList.add("star--filled");for(var t=n+1;t<r.length;t+=1)r[t].classList.remove("star--filled")})})},setRating:function(){this.elements.forEach(function(e){e.classList.add("star--filled")});var e=this.target.querySelector(".color1-start"),t=this.target.querySelector(".color1-end"),n=this.target.querySelector(".color2-start");e.setAttribute("stop-color",this.options.activeColor),t.setAttribute("stop-color",this.options.activeColor),this.percent&&(t.setAttribute("offset",this.percent),n.setAttribute("offset",this.percent))}}).init()}var a=document.querySelectorAll(".js-show-stars");a&&a.forEach(function(e,t){window["stars".concat(t)]=new c(e)});e=document.querySelectorAll(".js-set-stars");e&&e.forEach(function(e,t){window["starsRate".concat(t)]=new c(e,{readOnly:!1})});function l(t,n){if(Array.isArray(t))return!!t.length&&t.map(function(e){return new numberInput(e,n)});({init:function(){this.options=Object.assign({max:100,min:1,step:1},n);var e="string"==typeof t;this.container=e?document.querySelector(t):t;e=Array.from(this.container.querySelectorAll(".number-input__button"));this.targetInput=this.container.querySelector("input"),this.decButton=e[0],this.incButton=e[1],this.decButton.addEventListener("click",this.decrement.bind(this)),this.incButton.addEventListener("click",this.increment.bind(this))},decrement:function(){var e=+this.targetInput.value;if(!(e>this.options.min))return!1;this.targetInput.value=e-1},increment:function(){var e=+this.targetInput.value;if(!(e<this.options.max))return!1;this.targetInput.value=1+e}}).init()}var d=document.querySelectorAll(".number-input");d&&d.forEach(function(e,t){window["nubmerInput".concat(t)]=new l(e)});r=document.querySelector(".accordeon");r&&new Accordion(r,{elementClass:"accordeon__item",triggerClass:"accordeon__trigger",panelClass:"accordeon__panel",activeClass:"accordeon__item--active",showMultiple:!0}).open(1);var u=function t(e,n){if(Array.isArray(e))return!!e.length&&e.map(function(e){return new t(e,n)});this.options=Object.assign({},n);var r=!1,o="string"==typeof e?document.querySelector(e):e,i=document.querySelector("body"),s=function(e){e.target.dataset.close&&a()},c=function(e){"Escape"===e.key&&a()};function a(){r||(r=!0,document.removeEventListener("keydown",c),i.classList.remove("overflow"),setTimeout(function(){o.style.display="none",r=!1},300))}return o.addEventListener("click",s),{open:function(){r||(r=!0,document.addEventListener("keydown",c),o.style.display="block",setTimeout(function(){i.classList.add("overflow"),r=!1},100))},close:a,destroy:function(){o.removeEventListener("click",s)}}},o=document.querySelector(".review-modal");o&&(b=new u(o),document.querySelector(".js-review-modal").addEventListener("click",b.open));var p=function t(e,n){var r={},o=e,i=Array.from(o.querySelectorAll("option")).map(function(e){return e.textContent});r.optionsValues=i;i=o.querySelector("select").dataset.placeholder||"Выберите";r.placeholder=i,console.log("renderrrrr ->",o),o.innerHTML=(console.log("getTemplate called"),'\n          <div class="select__value" data-type="value">'.concat(r.placeholder,'</div>\n          <div class="select__dropdown">\n            <div class="select__dropdown-items" role="listbox">\n               ').concat(r.optionsValues.map(function(e){return'\n                  <div class="select__dropdown-item" data-type="item" role="option" tabindex="0">\n                     '.concat(e,"\n                  </div>\n                  ")}).join(""),"\n            </div>\n          </div>\n          "));if(Array.isArray(e))return!!e.length&&e.map(function(e){return new t(e,n)});var s=o.querySelector(".select__dropdown"),c=o.querySelector(".select__dropdown-items"),a=o.querySelector('[data-type="value"]');function l(e){var t=e.target.dataset.type;"value"===t?u():"item"===t?p(e.target):m()}function d(e){e.preventDefault(),e.stopPropagation(),38===e.keyCode&&e.target.previousElementSibling?e.target.previousElementSibling.focus():40===e.keyCode&&e.target.nextElementSibling?e.target.nextElementSibling.focus():27===e.keyCode?m():13!==e.keyCode&&32!==e.keyCode||p(e.target)}function u(){o.classList.contains("select--open")?m():(f(),c.children[0].focus())}function p(e){a.textContent=e.textContent,n.onSelect&&n.onSelect(e.textContent),m()}function f(){s.style.display="block",setTimeout(function(){o.classList.add("select--open")},0)}function m(){o.classList.remove("select--open"),setTimeout(function(){s.style.display="none"},300),o.focus()}return o.addEventListener("click",l),o.addEventListener("keydown",function(e){27===e.keyCode?(e.preventDefault(),m()):13!==e.keyCode&&32!==e.keyCode||(e.preventDefault(),u())}),Array.from(c.children).forEach(function(e){e.addEventListener("keydown",d)}),{open:f,close:m,select:p,destroy:function(){o.removeEventListener("click",l)}}},i=document.querySelector("#countrySelect"),s=document.querySelector("#citySelect");function f(e){e.target.parentNode.classList.add("active")}function m(e){e=e.target;e.value||e.parentNode.classList.remove("active")}i&&new p(i,{onSelect:function(e){console.log("country selected ->",e.trim())}}),s&&new p(s,{onSelect:function(e){console.log("city seected ->",e.trim())}}),{init:function(){var e=document.querySelectorAll(".float-input, .float-textarea");e.length&&e.forEach(function(e){var t;(e.querySelector("input")&&e.querySelector("input").value||e.querySelector("textarea")&&e.querySelector("textarea").value)&&e.classList.add("active"),e=(t=e).querySelector("input"),t=t.querySelector("textarea"),e&&(e.addEventListener("focus",f),e.addEventListener("blur",m)),t&&(t.addEventListener("focus",f),t.addEventListener("blur",m))})}}.init();function v(n){var r;return function(){var e=this,t=arguments;r&&window.cancelAnimationFrame(r),r=window.requestAnimationFrame(function(){n.apply(e,t)})}}function y(){var e=g.offsetHeight;t.style.paddingTop="".concat(e,"px"),g.classList.contains("top--pinned")||(g.style.top="-".concat(e,"px"))}function h(){var t=g.offsetHeight,n=0;document.addEventListener("scroll",function(){var e=window.scrollY||window.pageYOffset;x&&(x<e?(k.style.width="".concat(k.clientWidth,"px"),k.style.top="0",k.style.position="fixed"):k.style.position="static"),t<=e?(e<n?(g.classList.add("top--pinned"),g.style.top=0):(g.classList.remove("top--pinned"),g.style.top="-".concat(t,"px")),n=e):(g.classList.add("top--pinned"),g.style.top=0)})}var g=document.querySelector(".top"),_=document.querySelector(".js-menu"),w=document.querySelector(".js-close-menu"),S=document.querySelector(".nav"),a=document.querySelectorAll(".nav__link--submenu"),L=document.querySelector(".nav"),e=document.querySelector(".js-search"),q=document.querySelector(".header__search"),E=document.querySelector(".filters__items"),d=document.querySelectorAll(".filters__item"),r=document.querySelector(".js-filters"),u=document.querySelector(".js-filters-close"),o=document.querySelectorAll(".share"),b=document.querySelector(".product__options"),i=document.querySelectorAll(".js-cart-remove"),k=document.querySelector(".checkout__summary"),x=k?k.getBoundingClientRect().top-document.body.getBoundingClientRect().top:null,p=document.querySelector(".org-selector"),s=function(){window.innerWidth<=992?L.classList.remove("nav--desktop"):L.classList.add("nav--desktop")},A=v(s);_&&_.addEventListener("click",function(){S.classList.add("is-menu-visible"),t.classList.add("overflow")}),w.addEventListener("click",function(){S.classList.remove("is-menu-visible"),t.classList.remove("overflow")}),window.addEventListener("resize",function(){A(),v(y()),v(h())}),a.forEach(function(e){e.addEventListener("click",function(){e.classList.toggle("nav__link--opened")})}),e.addEventListener("click",function(){q.classList.toggle("mobile-search-visible");var e=q.querySelector("input");!function(e,t,n){t=e.classList.contains(t)?"show":"hide";"show"==t&&(e.style.display=n,e.style.opacity=0,setTimeout(function(){e.style.opacity=1},0)),"hide"==t&&(e.style.display=n,e.style.opacity=0,setTimeout(function(){e.style.display="none"},450))}(q,"mobile-search-visible",flex),e.focus()}),r&&r.addEventListener("click",function(){E.classList.add("filters__items--mobile"),t.classList.add("overflow")}),u&&u.addEventListener("click",function(){E.classList.remove("filters__items--mobile"),t.classList.remove("overflow")}),d&&d.forEach(function(e){e.addEventListener("click",function(){window.innerWidth<992&&e.classList.toggle("filters__item--opened")})}),o&&o.forEach(function(e){e.addEventListener("click",function(){e.classList.toggle("share--opened")})}),b&&b.querySelectorAll(".product__option-items").forEach(function(e){var t=e.querySelectorAll("label");e.style.width="".concat(50*t.length+10*(t.length-1),"px")}),i&&i.forEach(function(e){e.addEventListener("click",function(e){var t=e.target.closest(".cart__item");t.classList.add("cart__item--removed"),setTimeout(function(){t.remove()},300)})}),p&&p.querySelectorAll("span").forEach(function(e){var t=e.dataset.value,n=document.querySelector(".checkout__form"),r=e.parentElement.parentElement;e.addEventListener("click",function(){"ordinal"===t?(n.classList.remove("checkout__form--org"),n.classList.add("checkout__form--ordinal"),r.innerText="Физическое лицо"):"org"===t&&(r.innerText="Юридическое лицо",n.classList.remove("checkout__form--ordinal"),n.classList.add("checkout__form--org"))})}),s(),y(),h()});