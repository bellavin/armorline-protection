export const portfolioInner = () => {
  const modalElem = document.querySelector(`.js-portfolio-modal`);
  const modalOpenBtns = document.querySelectorAll(`.js-portfolio-modal-opener`);
  const MODAL_CLASS_NAME = `portfolio-modal--open`;
  let slider;
  // let sliderThumbs;


  if (modalElem && modalOpenBtns) {
    modalOpenBtns.forEach((btn, index) => {

      const overlayElem = modalElem.querySelector(`.js-modal-overlay`);
      const closeBtnElem = modalElem.querySelector(`.js-modal-close`);

      const openModalHandler = () => {
        if (modalElem) {
          modalElem.classList.add(MODAL_CLASS_NAME);
          document.addEventListener(`keydown`, escKeyDownHandler);

          slider = new Swiper(modalElem.querySelector(`.js-gallery-top`), {
            loop: true,
            navigation: {
              nextEl: `.swiper-button-next`,
              prevEl: `.swiper-button-prev`,
            },
          });
          slider.slideTo(index + 1, 0);

          // sliderThumbs = new Swiper(modalElem.querySelector('.js-gallery-thumbs'), {
          //   spaceBetween: 10,
          //   slidesPerView: 4,
          //   freeMode: true,
          //   watchSlidesVisibility: true,
          //   watchSlidesProgress: true,
          // });
        }
      };

      const closeModalHandler = () => {
          modalElem.classList.remove(MODAL_CLASS_NAME);
          document.removeEventListener(`keydown`, escKeyDownHandler);

          slider.destroy();
          // sliderThumbs.destroy();
      };

      const escKeyDownHandler = (evt) => {
        if (evt.key === `Escape` || evt.key === `Esc`) {
          closeModalHandler();
        }
      };

      if (btn) {
        btn.addEventListener(`click`, (evt) => {
          evt.preventDefault();
          openModalHandler();
        });
      }


      if (overlayElem) {
        overlayElem.addEventListener(`click`, (evt) => {
          evt.preventDefault();
          closeModalHandler();
        });
      }


      if (closeBtnElem) {
        closeBtnElem.addEventListener(`click`, (evt) => {
          evt.preventDefault();
          closeModalHandler();
        });
      }
    });
  }
}
