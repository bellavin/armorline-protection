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

}
