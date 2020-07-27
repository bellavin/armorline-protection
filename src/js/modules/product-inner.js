export const productInner = () => {
  const productInnerElem = document.querySelector(`.product-inner`);

  if (productInnerElem) {
    var mySwiper = new Swiper(`.product-inner .swiper-container`, {
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: `.swiper-button-next`,
        prevEl: `.swiper-button-prev`,
      },
      breakpoints: {

        500: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        }
      }
    });


    const setPrice = () => {
      const formElem = document.querySelector(`.js-product-inner-form`);
      const radioElems = formElem.querySelectorAll(`.js-product-inner-radio`);
      const priceElem = formElem.querySelector(`.js-product-inner-price`);

      const updatePrice = () => {
        const radioElem = [...radioElems].filter((elem) => elem.checked)[0];
        priceElem.textContent = radioElem.value.toLocaleString('ru-RU') + ` Р`;
      }

      if (formElem) {
        updatePrice();
        formElem.addEventListener(`change`, () => {
          updatePrice();
        });
      }
    }

    setPrice();
  }
}
