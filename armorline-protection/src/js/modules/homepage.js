import {setModalEvents} from '../utils/set-modal-events';


export const homepage = () => {

  const factsSlider = document.querySelector('.home-facts .swiper-container');
  let factsSliderSwiper;

  function factsMobileSlider() {
    if (factsSlider) {
      if (window.innerWidth <= 768 && factsSlider.dataset.mobile == 'false') {
        factsSliderSwiper = new Swiper(factsSlider, {
          loop: true,
          autoplay: {
            delay: 5000,
          }
        });

        factsSlider.dataset.mobile = 'true';
      }

      if (window.innerWidth > 768) {
        factsSlider.dataset.mobile = 'false';
        if (factsSlider.classList.contains('swiper-container-initialized')) {
          factsSliderSwiper.destroy();
        }
      }
    }
  }



  const salesSlider = document.querySelector('.home-sales .swiper-container');
  let salesSliderSwiper;

  function salesMobileSlider() {
    if (salesSlider) {
      if (window.innerWidth <= 768 && salesSlider.dataset.mobile == 'false') {
        salesSliderSwiper = new Swiper(salesSlider, {
          loop: true,
          autoplay: {
            delay: 5000,
          },
          slidesPerView: 1,
          breakpoints: {
            540: {
              slidesPerView: 2,
            }
          }
        });

        salesSlider.dataset.mobile = 'true';
      }

      if (window.innerWidth > 768) {
        salesSlider.dataset.mobile = 'false';
        if (salesSlider.classList.contains('swiper-container-initialized')) {
          salesSliderSwiper.destroy();
        }
      }
    }
  }

  factsMobileSlider();
  salesMobileSlider();

  window.addEventListener('resize', () => {
    factsMobileSlider();
    salesMobileSlider();
  });



  const modal1 = document.querySelector(`.js-modal-1`);
  const modal2 = document.querySelector(`.js-modal-2`);

  const modal1OpenBtn = document.querySelector(`.js-bn3r-modal-opener-1`);
  const modal2OpenBtn = document.querySelector(`.js-bn3r-modal-opener-2`);



  if (modal1 && modal1OpenBtn) {
    setModalEvents(modal1, modal1OpenBtn, `modal--open`);
  }

  if (modal2 && modal1OpenBtn) {
    setModalEvents(modal2, modal2OpenBtn, `modal--open`);
  }
}
