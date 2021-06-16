"use strict";document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector("body");t.classList.remove("preload");var e=document.querySelector(".main-slider");!e||(d=new Splide(e,{speed:800,perPage:1,arrows:!1,pagination:!0}))&&d.mount();var n,o=document.querySelector(".idea-slider");o&&((n=new Splide(o,{type:"loop",perPage:4,perMove:1,gap:30,speed:800,updateOnMove:!0,flickMaxPages:1,swipeDistanceThreshold:10,pagination:!1,waitForTransition:!1,classes:{arrows:"idea-slider__pagination",arrow:"idea-slider__arrow",prev:"idea-slider__prev",next:"idea-slider__next"}}))&&n.mount(),(u=document.querySelectorAll(".ideas .idea-card__img"))&&u.forEach(function(t){t.addEventListener("click",function(){var e=t.parentNode.dataset.slide;n.go(e-1)})}));var r=document.querySelector(".visit-slider");!r||(p=new Splide(r,{type:"loop",perPage:4,perMove:1,gap:30,speed:800,updateOnMove:!0,flickMaxPages:1,swipeDistanceThreshold:10,pagination:!1,waitForTransition:!1,classes:{arrows:"visit-slider-pagination",arrow:"visit-slider__arrow",prev:"visit-slider-prev",next:"visit-slider-next"}}))&&p.mount();var i=document.querySelectorAll(".subcat-slider");i&&i.forEach(function(e,t){window["innerSlider".concat(t)]=new Splide(e,{type:"loop",perPage:4,perMove:1,gap:30,speed:800,flickMaxPages:1,pagination:!1,classes:{arrows:"subcat-slider__arrows",arrow:"subcat-slider__arrow",prev:"subcat-slider__prev",next:"subcat-slider__next"},breakpoints:{1200:{perPage:3},992:{perPage:2},576:{perPage:1}}}),window["innerSlider".concat(t)]&&window["innerSlider".concat(t)].mount()});var s=document.querySelector(".product-slider__main");s&&(w=new Splide(s,{pagination:!1,classes:{arrows:"product-slider__arrows",arrow:"product-slider__arrow",prev:"product-slider__prev",next:"product-slider__next"}}),(q=new Splide(".product-slider-thumb",{fixedWidth:120,gap:10,pagination:!1,arrows:!1,isNavigation:!0,classes:{arrows:"product-slider-thumb__arrows",arrow:"product-slider-thumb__arrow",prev:"product-slider-thumb__prev",next:"product-slider-thumb__next"},breakpoints:{550:{fixedWidth:65}}})).mount(),w.sync(q).mount());function c(n,r){if(Array.isArray(n))return!!n.length&&n.map(function(e){return new c(e,r)});({init:function(){this.options=Object.assign({elementClass:"star",activeColor:"#5100D3",baseColor:"#BDBDBD",readOnly:!0},r);var e="string"==typeof n;if(this.container=e?document.querySelector(n):n,this.rating=this.container.dataset.rating,Number.isInteger(this.rating)||(this.percent="".concat(Math.ceil(100*(this.rating-Math.floor(this.rating))),"%")),!this.rating)throw new Error("You must provide data-rating on stars container");var o,t=this.options.elementClass;this.elements=Array.from(this.container.childNodes).filter(function(e){return e.classList&&e.classList.contains(t)}),this.elements.forEach(function(e){var t="_".concat(Math.random().toString(36).substr(2,9)),n=e.querySelector("linearGradient"),e=e.querySelector("path");n.id="gradient".concat(t),e.setAttribute("fill","url(#gradient".concat(t,")"))}),this.target=this.rating<5?this.elements[Math.floor(this.rating)]:this.elements[4],this.elements.length=Math.floor(this.rating),this.setRating(),this.options.readOnly||(o=Array.from(this.container.childNodes).filter(function(e){return e.classList&&e.classList.contains(t)})).forEach(function(e,n){e.addEventListener("click",function(){for(var e=0;e<=n;e+=1)o[e].classList.add("star--filled");for(var t=n+1;t<o.length;t+=1)o[t].classList.remove("star--filled")})})},setRating:function(){this.elements.forEach(function(e){e.classList.add("star--filled")});var e=this.target.querySelector(".color1-start"),t=this.target.querySelector(".color1-end"),n=this.target.querySelector(".color2-start");e.setAttribute("stop-color",this.options.activeColor),t.setAttribute("stop-color",this.options.activeColor),this.percent&&(t.setAttribute("offset",this.percent),n.setAttribute("offset",this.percent))}}).init()}var a=document.querySelectorAll(".js-show-stars");a&&a.forEach(function(e,t){window["stars".concat(t)]=new c(e)});e=document.querySelectorAll(".js-set-stars");e&&e.forEach(function(e,t){window["starsRate".concat(t)]=new c(e,{readOnly:!1})});function l(t,n){if(Array.isArray(t))return!!t.length&&t.map(function(e){return new numberInput(e,n)});({init:function(){this.options=Object.assign({max:100,min:1,step:1},n);var e="string"==typeof t;this.container=e?document.querySelector(t):t;e=Array.from(this.container.querySelectorAll(".number-input__button"));this.targetInput=this.container.querySelector("input"),this.decButton=e[0],this.incButton=e[1],this.decButton.addEventListener("click",this.decrement.bind(this)),this.incButton.addEventListener("click",this.increment.bind(this))},decrement:function(){var e=+this.targetInput.value;if(!(e>this.options.min))return!1;this.targetInput.value=e-1},increment:function(){var e=+this.targetInput.value;if(!(e<this.options.max))return!1;this.targetInput.value=1+e}}).init()}var d=document.querySelectorAll(".number-input");d&&d.forEach(function(e,t){window["nubmerInput".concat(t)]=new l(e)});o=document.querySelector(".accordeon");o&&new Accordion(o,{elementClass:"accordeon__item",triggerClass:"accordeon__trigger",panelClass:"accordeon__panel",activeClass:"accordeon__item--active",showMultiple:!0}).open(1);var u=function t(e,n){if(Array.isArray(e))return!!e.length&&e.map(function(e){return new t(e,n)});this.options=Object.assign({},n);var o=!1,r="string"==typeof e?document.querySelector(e):e,i=document.querySelector("body"),s=function(e){e.target.dataset.close&&a()},c=function(e){"Escape"===e.key&&a()};function a(){o||(o=!0,document.removeEventListener("keydown",c),i.classList.remove("overflow"),setTimeout(function(){r.style.display="none",o=!1},300))}return r.addEventListener("click",s),{open:function(){o||(o=!0,document.addEventListener("keydown",c),r.style.display="block",setTimeout(function(){i.classList.add("overflow"),o=!1},100))},close:a,destroy:function(){r.removeEventListener("click",s)}}},r=document.querySelector(".review-modal");r&&(x=new u(r),document.querySelector(".js-review-modal").addEventListener("click",x.open));function m(e,t){var n={},o=e,r=Array.from(o.querySelectorAll("option")).map(function(e){return e.textContent});if(n.optionsValues=r,r=o.querySelector("select").dataset.placeholder||"Выберите",n.placeholder=r,o.innerHTML='\n          <div class="select__value" data-type="value">'.concat(n.placeholder,'</div>\n          <div class="select__dropdown">\n            <div class="select__dropdown-items" role="listbox">\n               ').concat(n.optionsValues.map(function(e){return'\n                  <div class="select__dropdown-item" data-type="item" role="option" tabindex="0">\n                     '.concat(e,"\n                  </div>\n                  ")}).join(""),"\n            </div>\n          </div>\n          "),Array.isArray(e))return!!e.length&&e.map(function(e){return new m(e,t)});var i=o.querySelector(".select__dropdown"),s=o.querySelector(".select__dropdown-items"),c=o.querySelector('[data-type="value"]');function a(e){var t=e.target.dataset.type;"value"===t?d():"item"===t?u(e.target):f()}function l(e){e.preventDefault(),e.stopPropagation(),38===e.keyCode&&e.target.previousElementSibling?e.target.previousElementSibling.focus():40===e.keyCode&&e.target.nextElementSibling?e.target.nextElementSibling.focus():27===e.keyCode?f():13!==e.keyCode&&32!==e.keyCode||u(e.target)}function d(){o.classList.contains("select--open")?f():(p(),s.children[0].focus())}function u(e){c.textContent=e.textContent,t.onSelect&&t.onSelect(e.textContent),f()}function p(){i.style.display="block",setTimeout(function(){o.classList.add("select--open")},0)}function f(){o.classList.remove("select--open"),setTimeout(function(){i.style.display="none"},300),o.focus()}return o.addEventListener("click",a),o.addEventListener("keydown",function(e){27===e.keyCode?(e.preventDefault(),f()):13!==e.keyCode&&32!==e.keyCode||(e.preventDefault(),d())}),Array.from(s.children).forEach(function(e){e.addEventListener("keydown",l)}),{open:p,close:f,select:u,destroy:function(){o.removeEventListener("click",a)}}}var p=document.querySelector("#countrySelect"),i=document.querySelector("#citySelect");function f(e){e.target.parentNode.classList.add("active")}function v(e){e=e.target;e.value||e.parentNode.classList.remove("active")}p&&m(p,{onSelect:function(e){console.log("country selected ->",e.trim())}}),i&&m(i,{onSelect:function(e){console.log("city seected ->",e.trim())}}),{init:function(){var e=document.querySelectorAll(".float-input, .float-textarea");e.length&&e.forEach(function(e){var t;(e.querySelector("input")&&e.querySelector("input").value||e.querySelector("textarea")&&e.querySelector("textarea").value)&&e.classList.add("active"),e=(t=e).querySelector("input"),t=t.querySelector("textarea"),e&&(e.addEventListener("focus",f),e.addEventListener("blur",v)),t&&(t.addEventListener("focus",f),t.addEventListener("blur",v))})}}.init();function y(n){var o;return function(){var e=this,t=arguments;o&&window.cancelAnimationFrame(o),o=window.requestAnimationFrame(function(){n.apply(e,t)})}}function h(){var e=S.offsetHeight;t.style.paddingTop="".concat(e,"px"),S.classList.contains("top--pinned")||(S.style.top="-".concat(e,"px"))}function g(){var t=S.offsetHeight,n=0;document.addEventListener("scroll",function(){var e=window.scrollY||window.pageYOffset;C&&(C<e?(A.style.width="".concat(A.clientWidth,"px"),A.style.top="0",A.style.position="fixed"):A.style.position="static"),t<=e?(e<n?(S.classList.add("top--pinned"),S.style.top=0):(S.classList.remove("top--pinned"),S.style.top="-".concat(t,"px")),n=e):(S.classList.add("top--pinned"),S.style.top=0)})}var _,S=document.querySelector(".top"),s=document.querySelector(".js-menu"),w=document.querySelector(".js-close-menu"),L=document.querySelector(".nav"),q=document.querySelectorAll(".nav__link--submenu"),b=document.querySelector(".nav"),a=document.querySelector(".js-search"),E=document.querySelector(".header__search"),k=document.querySelector(".filters__items"),e=document.querySelectorAll(".filters__item"),d=document.querySelector(".js-filters"),o=document.querySelector(".js-filters-close"),u=document.querySelectorAll(".share"),r=document.querySelector(".product__options"),x=document.querySelectorAll(".js-cart-remove"),A=document.querySelector(".checkout__summary"),C=A?A.getBoundingClientRect().top-document.body.getBoundingClientRect().top:null,p=document.querySelector(".checkout .switch"),i=function(){window.innerWidth<=992?b.classList.remove("nav--desktop"):b.classList.add("nav--desktop")},M=y(i);s&&s.addEventListener("click",function(){L.classList.add("is-menu-visible"),t.classList.add("overflow")}),w.addEventListener("click",function(){L.classList.remove("is-menu-visible"),t.classList.remove("overflow")}),window.addEventListener("resize",function(){M(),y(h()),y(g())}),q.forEach(function(e){e.addEventListener("click",function(){e.classList.toggle("nav__link--opened")})}),a.addEventListener("click",function(){E.classList.toggle("mobile-search-visible");var e=E.querySelector("input");!function(e,t,n){t=e.classList.contains(t)?"show":"hide";"show"==t&&(e.style.display=n,e.style.opacity=0,setTimeout(function(){e.style.opacity=1},0)),"hide"==t&&(e.style.display=n,e.style.opacity=0,setTimeout(function(){e.style.display="none"},450))}(E,"mobile-search-visible",flex),e.focus()}),d&&d.addEventListener("click",function(){k.classList.add("filters__items--mobile"),t.classList.add("overflow")}),o&&o.addEventListener("click",function(){k.classList.remove("filters__items--mobile"),t.classList.remove("overflow")}),e&&e.forEach(function(e){e.addEventListener("click",function(){window.innerWidth<992&&e.classList.toggle("filters__item--opened")})}),u&&u.forEach(function(e){e.addEventListener("click",function(){e.classList.toggle("share--opened")})}),r&&r.querySelectorAll(".product__option-items").forEach(function(e){var t=e.querySelectorAll("label");e.style.width="".concat(50*t.length+10*(t.length-1),"px")}),x&&x.forEach(function(e){e.addEventListener("click",function(e){var t=e.target.closest(".cart__item");t.classList.add("cart__item--removed"),setTimeout(function(){t.remove()},300)})}),p&&(p=p.querySelectorAll("input"),_=document.querySelector(".checkout__form"),p.forEach(function(e){e.addEventListener("change",function(e){var t,n=e.target.value;"Физлицо"===n&&(_.classList.remove("checkout__form--org"),_.classList.add("checkout__form--ordinal"),e=document.querySelector("#countrySelect"),t=document.querySelector("#citySelect"),e&&m(e,{onSelect:function(e){console.log("country selected ->",e.trim())}}),t&&m(t,{onSelect:function(e){console.log("city seected ->",e.trim())}})),"Юрлицо"===n&&(_.classList.remove("checkout__form--ordinal"),_.classList.add("checkout__form--org"),t=document.querySelector("#orgCountrySelect"),n=document.querySelector("#orgCitySelect"),t&&m(t,{onSelect:function(e){console.log("country selected ->",e.trim())}}),n&&m(n,{onSelect:function(e){console.log("city seected ->",e.trim())}}))})})),i(),h(),g()});