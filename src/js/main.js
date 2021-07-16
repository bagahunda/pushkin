// enable strict mode
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  body.classList.remove("preload");

  // MAIN SLIDER
  const mainBlock = document.querySelector(".main-slider");
  if (mainBlock) {
    const sliderMain = new Splide(mainBlock, {
      speed: 800,
      perPage: 1,
      arrows: false,
      pagination: true,
    });
    sliderMain && sliderMain.mount();
  }

  // IDEAS SLIDER
  const ideaBlock = document.querySelector(".idea-slider");
  if (ideaBlock) {
    const ideaSlider = new Splide(ideaBlock, {
      type: "loop",
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
        arrows: "idea-slider__pagination",
        arrow: "idea-slider__arrow",
        prev: "idea-slider__prev",
        next: "idea-slider__next",
      },
    });
    ideaSlider && ideaSlider.mount();

    const ideaLinks = document.querySelectorAll(".ideas .idea-card__img");
    ideaLinks &&
      ideaLinks.forEach((item) => {
        item.addEventListener("click", function () {
          const parent = item.parentNode;
          const index = parent.dataset.slide;
          ideaSlider.go(index - 1);
        });
      });
  }

  // VISIT SLIDER
  const visitBlock = document.querySelector(".visit-slider");
  if (visitBlock) {
    const visitSlider = new Splide(visitBlock, {
      type: "loop",
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
        arrows: "visit-slider-pagination",
        arrow: "visit-slider__arrow",
        prev: "visit-slider-prev",
        next: "visit-slider-next",
      },
    });
    visitSlider && visitSlider.mount();
  }

  //CATEGORY PAGE SLIDER
  const subcatBlock = document.querySelectorAll(".subcat-slider");
  if (subcatBlock) {
    subcatBlock.forEach((block, index) => {
      window[`innerSlider${index}`] = new Splide(block, {
        type: "loop",
        perPage: 4,
        perMove: 1,
        gap: 30,
        speed: 800,
        flickMaxPages: 1,
        pagination: false,
        classes: {
          arrows: "subcat-slider__arrows",
          arrow: "subcat-slider__arrow",
          prev: "subcat-slider__prev",
          next: "subcat-slider__next",
        },
        breakpoints: {
          1200: {
            perPage: 3,
          },
          992: {
            perPage: 2,
          },
          576: {
            perPage: 1,
          },
        },
      });
      window[`innerSlider${index}`] && window[`innerSlider${index}`].mount();
    });
  }

  // BLOGPOST SLIDER
  const blogpostSliderBlock = document.querySelector('.blogpost-slider');
  if (blogpostSliderBlock) {
    const blogpostSlider = new Splide(blogpostSliderBlock, {
      type: "loop",
      perPage: 3,
      perMove: 1,
      gap: 30,
      speed: 800,
      flickMaxPages: 1,
      pagination: false,
      classes: {
        arrows: "subcat-slider__arrows",
        arrow: "subcat-slider__arrow",
        prev: "subcat-slider__prev",
        next: "subcat-slider__next",
      },
      breakpoints: {
        992: {
          perPage: 2,
        },
        768: {
          perPage: 1,
        }
      }
    });
    blogpostSlider.mount();
  }

  //Product slider
  const product = document.querySelector(".product-slider__main");
  if (product) {
    const productSlider = new Splide(product, {
      pagination: false,
      classes: {
        arrows: "product-slider__arrows",
        arrow: "product-slider__arrow",
        prev: "product-slider__prev",
        next: "product-slider__next",
      },
    });

    const productThumbSlider = new Splide(".product-slider-thumb", {
      fixedWidth: 120,
      gap: 10,
      pagination: false,
      arrows: false,
      isNavigation: true,
      classes: {
        arrows: "product-slider-thumb__arrows",
        arrow: "product-slider-thumb__arrow",
        prev: "product-slider-thumb__prev",
        next: "product-slider-thumb__next",
      },
      breakpoints: {
        550: {
          fixedWidth: 65,
        },
      },
    });
    productThumbSlider.mount();
    productSlider.sync(productThumbSlider).mount();
  }

  // ABOUT REVIEWS SLIDER
  const reviewsBlock = document.querySelector('.about__review-slider');
  if (reviewsBlock) {
    const reviewSlider = new Splide('.about__review-slider', {
      pagination: false,
      arrows: false,
      perPage: 1,
      type: 'loop'
    });
    reviewSlider.mount();
    const reviewSliderNextButton = document.querySelector('.about__reviews-slider-button--next');
    const reviewSliderPrevButton = document.querySelector('.about__reviews-slider-button--prev');
    reviewSliderNextButton.addEventListener('click', function() {
      reviewSlider.go('+');
    });
    reviewSliderPrevButton.addEventListener('click', function() {
      reviewSlider.go('-');
    })
  }

  //STAR RATING

  const Starify = function (selectorOrElement, userOptions) {
    if (Array.isArray(selectorOrElement)) {
      if (selectorOrElement.length) {
        return selectorOrElement.map((item) => new Starify(item, userOptions));
      }

      return false;
    }

    const core = {
      init() {
        const defaults = {
          elementClass: "star",
          activeColor: "#5100D3",
          baseColor: "#BDBDBD",
          readOnly: true,
        };

        this.options = Object.assign(defaults, userOptions);

        const isString = typeof selectorOrElement === "string";

        this.container = isString
          ? document.querySelector(selectorOrElement)
          : selectorOrElement;

        this.rating = this.container.dataset.rating;

        if (!Number.isInteger(this.rating)) {
          this.percent = `${Math.ceil(
            (this.rating - Math.floor(this.rating)) * 100
          )}%`;
        }

        if (!this.rating) {
          throw new Error("You must provide data-rating on stars container");
        }
        const { elementClass } = this.options;

        this.elements = Array.from(this.container.childNodes).filter(
          (el) => el.classList && el.classList.contains(elementClass)
        );

        this.elements.forEach((el) => {
          const id = `_${Math.random().toString(36).substr(2, 9)}`;
          const gr = el.querySelector("linearGradient");
          const path = el.querySelector("path");
          gr.id = `gradient${id}`;
          path.setAttribute("fill", `url(#gradient${id})`);
        });

        this.target =
          this.rating < 5
            ? this.elements[Math.floor(this.rating)]
            : this.elements[4];

        this.elements.length = Math.floor(this.rating);

        this.setRating();

        if (!this.options.readOnly) {
          const stars = Array.from(this.container.childNodes).filter(
            (el) => el.classList && el.classList.contains(elementClass)
          );
          stars.forEach((element, index) => {
            element.addEventListener("click", function () {
              for (let i = 0; i <= index; i += 1) {
                stars[i].classList.add("star--filled");
              }
              for (let i = index + 1; i < stars.length; i += 1) {
                stars[i].classList.remove("star--filled");
              }
            });
          });
        }
      },

      setRating() {
        this.elements.forEach((element) => {
          element.classList.add("star--filled");
        });
        const col1 = this.target.querySelector(".color1-start");
        const col2 = this.target.querySelector(".color1-end");
        const col3 = this.target.querySelector(".color2-start");
        col1.setAttribute("stop-color", this.options.activeColor);
        col2.setAttribute("stop-color", this.options.activeColor);
        if (this.percent) {
          col2.setAttribute("offset", this.percent);
          col3.setAttribute("offset", this.percent);
        }
      },
    };

    core.init();
  };

  const starsContainer = document.querySelectorAll(".js-show-stars");

  if (starsContainer) {
    starsContainer.forEach((star, index) => {
      window[`stars${index}`] = new Starify(star);
    });
    // const starsRating = new Starify(starsContainer);
  }

  const reviewStarContainer = document.querySelectorAll(".js-set-stars");
  if (reviewStarContainer) {
    reviewStarContainer.forEach((el, index) => {
      window[`starsRate${index}`] = new Starify(el, { readOnly: false });
    });
  }

  // NUMBER INPUT

  const NumberInput = function (selectorOrElement, userOptions) {
    if (Array.isArray(selectorOrElement)) {
      if (selectorOrElement.length) {
        return selectorOrElement.map(
          (item) => new numberInput(item, userOptions)
        );
      }

      return false;
    }

    const core = {
      init() {
        const defaults = {
          max: 100,
          min: 1,
          step: 1,
        };

        this.options = Object.assign(defaults, userOptions);

        const isString = typeof selectorOrElement === "string";

        this.container = isString
          ? document.querySelector(selectorOrElement)
          : selectorOrElement;

        const buttons = Array.from(
          this.container.querySelectorAll(".number-input__button")
        );

        this.targetInput = this.container.querySelector("input");
        this.decButton = buttons[0];
        this.incButton = buttons[1];

        this.decButton.addEventListener("click", this.decrement.bind(this));
        this.incButton.addEventListener("click", this.increment.bind(this));
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
          return false;
        }
      },
    };

    core.init();
  };

  const numberInputs = document.querySelectorAll(".number-input");
  if (numberInputs) {
    numberInputs.forEach((input, index) => {
      window[`nubmerInput${index}`] = new NumberInput(input);
    });
  }

  // ACCORDEON

  const accordeonContainer = document.querySelectorAll(".accordeon");
  const productAccorderon = document.querySelector(".product__accordeon .accordeon");

  if (accordeonContainer.length > 0 && !productAccorderon) {
    accordeonContainer.forEach((item, index) => {
      window[`accordeon${index}`] = new Accordion(item, {
        elementClass: "accordeon__item",
        triggerClass: "accordeon__trigger",
        panelClass: "accordeon__panel",
        activeClass: "accordeon__item--active",
        showMultiple: true,
      });
      window[`accordeon${index}`].open(1);
    })
  }

  if (productAccorderon) {
    const acc = new Accordion(productAccorderon, {
      elementClass: "accordeon__item",
        triggerClass: "accordeon__trigger",
        panelClass: "accordeon__panel",
        activeClass: "accordeon__item--active",
        showMultiple: true,
    });
    acc.openAll();
  }

  // MODAL

  // const Modal = function (selectorOrElement, userOptions) {
  //   if (Array.isArray(selectorOrElement)) {
  //     if (selectorOrElement.length) {
  //       return selectorOrElement.map((item) => new Modal(item, userOptions));
  //     }

  //     return false;
  //   }

  //   const defaults = {};

  //   this.options = Object.assign(defaults, userOptions);

  //   const isString = typeof selectorOrElement === "string";

  //   let isBusy = false;

  //   const container = isString
  //     ? document.querySelector(selectorOrElement)
  //     : selectorOrElement;

  //   const body = document.querySelector("body");

  //   const listener = function (event) {
  //     if (event.target.dataset.close) {
  //       close();
  //       setTimeout(() => {
  //         userOptions.onClose ? userOptions.onClose() : null;
  //       }, 300);
  //     }
  //   };

  //   const escListener = function (event) {
  //     if (event.key === "Escape") {
  //       close();
  //     }
  //   };

  //   container.addEventListener("click", listener);

  //   function open() {
  //     if (isBusy) return;
  //     isBusy = true;
  //     document.addEventListener("keydown", escListener);
  //     container.style.display = "block";
  //     setTimeout(() => {
  //       body.classList.add("overflow");
  //       isBusy = false;
  //     }, 100);
  //   }
  //   function close() {
  //     if (isBusy) return;
  //     isBusy = true;
  //     document.removeEventListener("keydown", escListener);
  //     body.classList.remove("overflow");
  //     setTimeout(() => {
  //       container.style.display = "none";
  //       isBusy = false;
  //     }, 300);
  //   }
  //   function destroy() {
  //     container.removeEventListener("click", listener);
  //   }

  //   return {
  //     open,
  //     close,
  //     destroy,
  //   };
  // };

  // SELECT

   const Select = function (selectorOrElement, userOptions) {
      const data = {};
      const container = isString
      ? document.querySelector(selectorOrElement)
      : selectorOrElement;

      const optionsValues = Array.from(container.querySelectorAll('option')).map(item => item.textContent);
      
      data.optionsValues = optionsValues;

      const placeholder = container.querySelector('select').dataset.placeholder || 'Выберите';
      data.placeholder = placeholder;
      
      render();
      
      const isString = typeof selectorOrElement === "string";

    if (Array.isArray(selectorOrElement)) {
      if (selectorOrElement.length) {
        return selectorOrElement.map((item) => new Select(item, userOptions));
      }

      return false;
    }

      const menuWrapper = container.querySelector(".select__dropdown");
      const menu = container.querySelector(".select__dropdown-items");
      const value = container.querySelector('[data-type="value"]');

    container.addEventListener("click", clickHandler);
    container.addEventListener("keydown", handleToggleKeyPress);

    Array.from(menu.children).forEach((item) => {
      item.addEventListener("keydown", handleItemKeyDown);
    });

    function getTemplate() {
      return `
          <div class="select__value" data-type="value">${data.placeholder}</div>
          <div class="select__dropdown">
            <div class="select__dropdown-items" role="listbox">
               ${data.optionsValues.map(value => {
                  return `
                  <div class="select__dropdown-item" data-type="item" role="option" tabindex="0">
                     ${value}
                  </div>
                  `
               }).join('')}
            </div>
          </div>
          `;
    }

    function render() {
      container.innerHTML = getTemplate();
    }

    function clickHandler(e) {
      const { type } = e.target.dataset;
      if (type === "value") {
        toggle();
      } else if (type === "item") {
        select(e.target);
      } else {
        close();
      }
    }

    function handleItemKeyDown(e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.keyCode === 38 && e.target.previousElementSibling) {
        // up
        e.target.previousElementSibling.focus();
      } else if (e.keyCode === 40 && e.target.nextElementSibling) {
        // down
        e.target.nextElementSibling.focus();
      } else if (e.keyCode === 27) {
        // escape
        close();
      } else if (e.keyCode === 13 || e.keyCode === 32) {
        // enter or space
        select(e.target);
      } else {
        return;
      }
    }

    function handleToggleKeyPress(e) {
      if (e.keyCode === 27) {
        // escape
        e.preventDefault();
        close();
      } else if (e.keyCode === 13 || e.keyCode === 32) {
        // enter or space
        e.preventDefault();
        toggle();
      } else {
        return;
      }
    }

    function toggle() {
      const isOpen = container.classList.contains("select--open");
      if (isOpen) {
        close();
      } else {
        open();
        menu.children[0].focus();
      }
    }

    function select(item) {
      value.textContent = item.textContent;
      userOptions.onSelect ? userOptions.onSelect(item.textContent) : null;
      close();
    }

    function open() {
      menuWrapper.style.display = "block";
      setTimeout(() => {
        container.classList.add("select--open");
      }, 0);
    }

    function close() {
      container.classList.remove("select--open");
      setTimeout(() => {
        menuWrapper.style.display = "none";
      }, 300);
      container.focus();
    }

    function destroy() {
      container.removeEventListener("click", clickHandler);
    }

    function init() {}

    return { open, close, select, destroy };
  };

  const countrySelector = document.querySelector("#countrySelect");
  const citySelector = document.querySelector("#citySelect");
  const cabinetCitySelector = document.querySelector('#cabinetCountrySelect');

  if (countrySelector) {
     const countrySelect = new Select(countrySelector, {
        onSelect(e) {
         console.log("country selected ->", e.trim());
        }
     })
  }

  if (citySelector) {
     const citySelect = new Select(citySelector, {
        onSelect(e) {
           console.log('city seected ->', e.trim());
        }
     })
  }

  if (cabinetCitySelector) {
    const cabinetCitySelect = new Select(cabinetCitySelector, {
      onSelect(e) {
        console.log('city seected ->', e.trim());
      }
    })
  }

  // FLOAT LABELS

  const floatLabel = (function () {
    function handleFocus(e) {
      const target = e.target;
      target.parentNode.classList.add("active");
      target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
    }

    function handleBlur(e) {
      const target = e.target;
      if (!target.value) {
        target.parentNode.classList.remove("active");
      }
      target.removeAttribute('placeholder');
    }

    function bindEvents(element) {
      const input = element.querySelector("input");
      const text = element.querySelector("textarea");

      if (input) {
        input.addEventListener("focus", handleFocus);
        input.addEventListener("blur", handleBlur);
      }

      if (text) {
        text.addEventListener("focus", handleFocus);
        text.addEventListener("blur", handleBlur);
      }
    }

    function init() {
      const floatInputs = document.querySelectorAll(
        ".float-input, .float-textarea"
      );
      if (floatInputs.length) {
        floatInputs.forEach((input) => {
          if (
            (input.querySelector("input") &&
              input.querySelector("input").value) ||
            (input.querySelector("textarea") &&
              input.querySelector("textarea").value)
          ) {
            input.classList.add("active");
          }
          bindEvents(input);
        });
      }
    }

    return { init };
  })();

  floatLabel.init();

  // NAVIGATION
  const topBlock = document.querySelector(".top");
  const menuButton = document.querySelector(".js-menu");
  const closeMenuButton = document.querySelector(".js-close-menu");
  const menu = document.querySelector(".nav");
  const submenuLinks = document.querySelectorAll(".nav__link--submenu");
  const nav = document.querySelector(".nav");
  const searchBtn = document.querySelector(".js-search");
  const search = document.querySelector(".header__search");
  const filters = document.querySelector(".filters__items");
  const filtesLinks = document.querySelectorAll(".filters__item");
  const filtersButton = document.querySelector(".js-filters");
  const filtersCloseBtn = document.querySelector(".js-filters-close");
  const shareLinks = document.querySelectorAll(".share");
  const productOptions = document.querySelector(".product__options");
  const cartRemoveButtons = document.querySelectorAll(".js-cart-remove");
  const checkoutSummary = document.querySelector('.checkout__summary');
  const summaryPosition = checkoutSummary ? checkoutSummary.getBoundingClientRect().top - document.body.getBoundingClientRect().top : null;
  const summaryHeight =  checkoutSummary ? checkoutSummary.offsetHeight : null;
  const formSwitchBlock = document.querySelector('.checkout .switch');
  const moneybackBlock = document.querySelectorAll('.js-moneyback');
  const moneybackNextButton = document.querySelector('.js-moneyback-next');
  const subscribeRemoveBtns = document.querySelectorAll('.js-subscribe-remove');
  const changeAddressButton = document.querySelector('.js-change-address');
  const resetPasswordButton = document.querySelector('.js-reset-password');
  const qaModalBlock = document.querySelector('#qaModal');
  const contactBlock = document.querySelector('.contacts');

  const debounce = function (fn) {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }
      timeout = window.requestAnimationFrame(function () {
        fn.apply(context, args);
      });
    };
  };

  const getDimensions = function () {
    const w = window.innerWidth;
    if (w <= 992) {
      nav.classList.remove("nav--desktop");
    } else {
      nav.classList.add("nav--desktop");
    }
  };

  const getDimensionsDebounce = debounce(getDimensions);

  const animateEl = function (el, className, displayProp) {
    const action = el.classList.contains(className) ? "show" : "hide";
    const ctr = 0;
    if (action === "show") {
      el.style.display = displayProp;
      el.style.opacity = 0;
      setTimeout(() => {
        el.style.opacity = 1;
      }, 0);
    }
    if (action === "hide") {
      el.style.display = displayProp;
      el.style.opacity = 0;
      setTimeout(() => {
        el.style.display = "none";
      }, 450);
    }
  };

  const setBodyTopPadding = function () {
    const topHeight = topBlock.offsetHeight;
    body.style.paddingTop = `${topHeight}px`;
    if (!topBlock.classList.contains("top--pinned")) {
      topBlock.style.top = `-${topHeight}px`;
    }
  };

  const addScrollListener = function () {
    const topHeight = topBlock.offsetHeight;
    let topTrigger = 0;
    document.addEventListener("scroll", function () {
      const top = window.scrollY || window.pageYOffset;
      if (summaryPosition) {
         const subscribeBlock = document.querySelector('.subscribe');
         const subscribePosition = subscribeBlock.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
         const limit = subscribeBlock.getBoundingClientRect().top - summaryHeight;
         if (top > summaryPosition && (top + summaryHeight) < subscribePosition) {
            checkoutSummary.style.width = `${checkoutSummary.clientWidth}px`;
            checkoutSummary.style.top = '0';
            checkoutSummary.style.position = 'fixed';
         } else if(limit <= 0) {
            checkoutSummary.style.top = `${limit}px`;
         } else {
            checkoutSummary.style.position = 'static';
         }
      }
      if (top >= topHeight) {
        if (top < topTrigger) {
          topBlock.classList.add("top--pinned");
          topBlock.style.top = 0;
          const menu = document.querySelectorAll('.nav.nav--desktop .nav__link--submenu .submenu-wrapper');
            menu.forEach(item => {
              item.style.display = '';
            })
        } else {
          topBlock.classList.remove("top--pinned");
          topBlock.style.top = `-${topHeight}px`;
          if (window.innerWidth > 992) {
            const menu = document.querySelectorAll('.nav.nav--desktop .nav__link--submenu .submenu-wrapper');
            menu.forEach(item => {
              item.style.display = 'none';
            })
          }
        }
        topTrigger = top;
      } else {
        topBlock.classList.add("top--pinned");
        topBlock.style.top = 0;
      }
    });
  };

  if (menuButton) {
    menuButton.addEventListener("click", function () {
      menu.classList.add("is-menu-visible");
      body.classList.add("overflow");
    });
  }

  closeMenuButton.addEventListener("click", function () {
    menu.classList.remove("is-menu-visible");
    body.classList.remove("overflow");
  });

  window.addEventListener("resize", function () {
    getDimensionsDebounce();
    debounce(setMapWidth());
    debounce(setBodyTopPadding());
    debounce(addScrollListener());
  });

  submenuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      link.classList.toggle("nav__link--opened");
    });
  });

  searchBtn.addEventListener("click", function () {
    search.classList.toggle("mobile-search-visible");
    const target = search.querySelector("input");
    animateEl(search, "mobile-search-visible", flex);
    target.focus();
  });

  if (filtersButton) {
    filtersButton.addEventListener("click", function () {
      filters.classList.add("filters__items--mobile");
      body.classList.add("overflow");
    });
  }

  if (filtersCloseBtn) {
    filtersCloseBtn.addEventListener("click", function () {
      filters.classList.remove("filters__items--mobile");
      body.classList.remove("overflow");
    });
  }

  if (filtesLinks) {
    filtesLinks.forEach((link) => {
      link.addEventListener("click", function () {
        const isFiltersMobile = window.innerWidth < 992;
        if (isFiltersMobile) {
          // const parent = link.parentElement;
          link.classList.toggle("filters__item--opened");
        }
      });
    });
  }

  if (shareLinks) {
    shareLinks.forEach((link) => {
      link.addEventListener("click", function () {
        link.classList.toggle("share--opened");
      });
    });
  }

  if (productOptions) {
    const options = productOptions.querySelectorAll(".product__option-items");
    options.forEach((option) => {
      const selectors = option.querySelectorAll("label");
      option.style.width = `${
        selectors.length * 50 + (selectors.length - 1) * 10
      }px`;
    });
  }

  if (cartRemoveButtons) {
    cartRemoveButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        const target = e.target.closest(".cart__item");
        target.classList.add("cart__item--removed");
        setTimeout(() => {
          target.remove();
        }, 300);
      });
    });
  }
  
  if (formSwitchBlock) {
     const switchInput = formSwitchBlock.querySelectorAll('input');
     const form = document.querySelector('.checkout__form');
     switchInput.forEach(function(input) {
        input.addEventListener('change', function(e) {
           const org = e.target.value;
           if (org === 'Физлицо') {
              form.classList.remove('checkout__form--org');
              form.classList.add('checkout__form--ordinal');
              const countrySelector = document.querySelector("#countrySelect");
               const citySelector = document.querySelector("#citySelect");

               if (countrySelector) {
                  const countrySelect = new Select(countrySelector, {
                     onSelect(e) {
                        console.log("country selected ->", e.trim());
                     }
                  })
               }

               if (citySelector) {
                  const citySelect = new Select(citySelector, {
                     onSelect(e) {
                        console.log('city seected ->', e.trim());
                     }
                  })
               }
           }
           if (org === 'Юрлицо') {
            form.classList.remove('checkout__form--ordinal');
            form.classList.add('checkout__form--org');
            const countrySelector = document.querySelector("#orgCountrySelect");
            const citySelector = document.querySelector("#orgCitySelect");

            if (countrySelector) {
               const countrySelect = new Select(countrySelector, {
                  onSelect(e) {
                     console.log("country selected ->", e.trim());
                  }
               })
            }

            if (citySelector) {
               const citySelect = new Select(citySelector, {
                  onSelect(e) {
                     console.log('city seected ->', e.trim());
                  }
               })
            }
         }
        })
     })
  }

  if (subscribeRemoveBtns) {
    subscribeRemoveBtns.forEach((button) => {
      button.addEventListener("click", function (e) {
        const target = e.target.closest(".cabinetSubscribe__item");
        target.classList.add("cabinetSubscribe__item--removed");
        setTimeout(() => {
          target.remove();
        }, 300);
      });
    });
  }

  if (changeAddressButton) {
    changeAddressButton.addEventListener('click', function(e) {
      const isSave = e.target.textContent === 'Сохранить изменения';
      const form = document.querySelector('.cabinet__addresses .form');
      if (isSave) {
        form.classList.remove('form--edit');
        e.target.textContent = "Изменить адрес"
      } else {
        form.classList.add('form--edit');
        e.target.textContent = "Сохранить изменения"
      }
    });
  }

  if (resetPasswordButton) {
    resetPasswordButton.addEventListener('click', function(e) {
      const isReseting = e.target.textContent === 'Сохранить пароль'
      const parent = document.querySelector('.cabinet__form');
      if (isReseting) {
        parent.classList.remove('cabinet__form--password-edit');
        e.target.textContent = "Сбросить пароль"
      } else {
        parent.classList.add('cabinet__form--password-edit');
        e.target.textContent = "Сохранить пароль"
      }
    })
  }

  if (qaModalBlock) {
    const qaModal = new bootstrap.Modal(qaModalBlock);
    const form = document.querySelector('#qa-form');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      qaModal.show();
    })
  }

  if (contactBlock) {
    let map;
    function initMap() {
      const pos = {lat: 55.74763125647648, lng: 37.60503481134306}
      map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 16,
        mapId: '2ce0e883e173118e',
        disableDefaultUI: true,
      });

      const svgMarker = {
        path: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
        fillColor: "blue",
        fillRule: "evenodd",
        clipRule:"evenodd",
        rotation: 0,
        scale: 1,
        anchor: new google.maps.Point(19,25),
      };

      const marker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: './dist/images/pin.svg'
      })
    } 
    initMap();
  }

  function setMapWidth() {
    if (contactBlock) {
      const mapBlock = contactBlock.querySelector('.contacts__map');
      const windowWidth = +window.innerWidth;
      if (windowWidth < 992) {
        mapBlock.style.width = '100%';
        return;  
      }
      const container = contactBlock.querySelector('.container');
      const containerWidth = +container.clientWidth;
      const mapWidth = +containerWidth / 2;
      const padding = (windowWidth - containerWidth) / 2;
      mapBlock.style.width = `${mapWidth + padding}px`;
    }
  }

  getDimensions();
  setBodyTopPadding();
  addScrollListener();
  setMapWidth();
})
